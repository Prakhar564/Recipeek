from django.contrib import admin
from .models import Ingredient, Recipe, UserPreferences

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'prep_time', 'serving_size', 'author')
    filter_horizontal = ('ingredients',)  # Add this to improve ingredient selection in the admin panel

@admin.register(UserPreferences)
class UserPreferencesAdmin(admin.ModelAdmin):
    list_display = ('user', 'dietary_restrictions')
    filter_horizontal = ('disliked_ingredients',)