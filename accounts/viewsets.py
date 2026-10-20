from django.contrib.auth.models import Group
from rest_framework import viewsets
from rest_framework.permissions import SAFE_METHODS, BasePermission

from accounts.models import Profile, User
from accounts.serializers import GroupSerializer, ProfileSerializer, UserSerializer


class ReadOnlyOrAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    search_fields = ["username", "email", "first_name", "last_name", "role"]
    ordering_fields = ["date_joined", "username", "role"]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by("name")
    serializer_class = GroupSerializer
    permission_classes = [ReadOnlyOrAdmin]
    search_fields = ["name"]


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.select_related("user").all().order_by("-created_at")
    serializer_class = ProfileSerializer
    search_fields = ["user__username", "institution", "specialization", "city", "country"]
