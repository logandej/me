---
title:
layout: default
permalink: /projects/
published: true
---

<div class="ProjectContainer">

{% assign categories_list = "professionnel,universitaire,personnel,gamejam" | split: "," %}
{% assign categories_labels = "Projets Professionnels,Projets Universitaires,Projets Personnels,Game Jams" | split: "," %}

{% for i in (0..3) %}
  {% assign cat_key = categories_list[i] %}
  {% assign cat_label = categories_labels[i] %}
  
  <div><h2>{{ cat_label }}</h2></div>

  <div class="gallery">
    
    {% assign projects = site.projects | where: "categorie", cat_key | reverse %}
    
    {% if projects.size > 0 %}
      {% for project in projects %}
      <div class="projectTile boxshadow" {% if cat_key == "professionnel" %}id="professionnel"{% endif %} style="--bg-img: url('{{ project.projectTileBgImg | relative_url }}');">

          {% if project.redirect %}
              {% assign link = project.redirect %}
            {% else %}
              {% assign link = project.url | prepend: site.baseurl | prepend: site.url %}
            {% endif %}

          <a href="{{ link }}" {% if project.redirect %}target="_blank"{% endif %}>
            <span>
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </span>
          </a>
        </div>
      {% endfor %}
    {% else %}
      <p>Aucun projet</p>
    {% endif %}

  </div>

{% endfor %}
</div>

