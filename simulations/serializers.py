from rest_framework import serializers

from simulations.models import Simulation, SimulationProgress


class SimulationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Simulation
        fields = "__all__"


class SimulationProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimulationProgress
        fields = "__all__"
