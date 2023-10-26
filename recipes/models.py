from django.db import models

class Category(models.Model):
    category_name = models.CharField(max_length=124)

    def __str__(self):
        return self.category_name

class Recipe(models.Model):
    title = models.CharField(max_length=124)
    text = models.TextField()
    category = models.ManyToManyField(Category)

    def __str__(self):
        return self.title

