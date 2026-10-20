from rest_framework import permissions, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from accounts.serializers import (
	AuthUserSerializer,
	CurrentUserUpdateSerializer,
	CustomTokenObtainPairSerializer,
	RegisterSerializer,
)


class RegisterView(APIView):
	permission_classes = [permissions.AllowAny]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def post(self, request, *args, **kwargs):
		serializer = RegisterSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		refresh = RefreshToken.for_user(user)
		response_serializer = AuthUserSerializer(user, context={"request": request})
		return Response(
			{
				"access": str(refresh.access_token),
				"refresh": str(refresh),
				"user": response_serializer.data,
				"role": user.role,
			},
			status=status.HTTP_201_CREATED,
		)


class CurrentUserView(APIView):
	permission_classes = [permissions.IsAuthenticated]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		serializer = AuthUserSerializer(request.user, context={"request": request})
		return Response(serializer.data)

	def put(self, request, *args, **kwargs):
		serializer = CurrentUserUpdateSerializer(request.user, data=request.data, partial=True)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response(AuthUserSerializer(request.user, context={"request": request}).data)

	def patch(self, request, *args, **kwargs):
		return self.put(request, *args, **kwargs)


class CustomTokenObtainPairView(TokenObtainPairView):
	serializer_class = CustomTokenObtainPairSerializer
