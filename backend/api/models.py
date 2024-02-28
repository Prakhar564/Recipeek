from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.dispatch import receiver

class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def profile(self):
        return Profile.objects.get(user=self)

    favorite_ingredients = models.ManyToManyField('Ingredient', related_name='favored_by', blank=True)
    # Redefine groups and user_permissions with a custom related_name
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="custom_user_set",
        related_query_name="custom_user",
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="custom_user_set",
        related_query_name="custom_user",
    )

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)
    # Add preferred recipes as a many-to-many relationship
    preferred_recipes = models.ManyToManyField('Recipe', related_name='preferred_by', blank=True)

class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100, blank=True)
    # Associate each ingredient with a user
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ingredients', null=True, blank=True)

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.ManyToManyField(Ingredient, related_name='used_in_recipes')
    instructions = models.TextField()
    prep_time = models.IntegerField(help_text="Preparation time in minutes")
    serving_size = models.IntegerField(default=1)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
