---
title:
layout: default
permalink: /projects/
published: true
---

<div class="ProjectContainer">

  {% assign categories = "pro,univ" | split: "," %}

  {% for cat in categories %}

    <div class="gallery">
      
      {% assign projects = site.projects | where_exp: "p", "p.categorie == cat" %}
      
      {% for project in projects %}

        <div class="projectTile" {% if cat == "univ" %}id="univ"{% endif %}>

          {% assign link = project.redirect | default: project.url | prepend: site.baseurl | prepend: site.url %}

          <a href="{{ link }}" {% if project.redirect %}target="_blank"{% endif %}>
            <span>
              <h2>{{ project.title }}</h2>
              <br/>
              <p>{{ project.description }}</p>
            </span>
          </a>
        </div>

      {% endfor %}

    </div>

    <br>
    -------------------------------------
    <br>
  {% endfor %}

</div>
