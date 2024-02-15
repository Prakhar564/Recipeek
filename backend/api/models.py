from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.ManyToManyField(Ingredient)
    instructions = models.TextField()
    prep_time = models.IntegerField(help_text="Preparation time in minutes")
    serving_size = models.IntegerField(default=1)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')

    def __str__(self):
        return self.title

class UserPreferences(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='preferences')
    dietary_restrictions = models.CharField(max_length=200, blank=True)
    disliked_ingredients = models.ManyToManyField(Ingredient, blank=True)

    def __str__(self):
        return f"{self.user.username}'s Preferences"
