from rest_framework import serializers 
from .models import Grocery
  
class ReactSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Grocery 
        fields = ['item', 'quantity'] 