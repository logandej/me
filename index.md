---
layout: about
permalink: /
profile:
  align: right
  image: profile.jpg
published: true
---


<div class="bandeau">
  <img class="bandeau__avatar boxshadow" src="{{ page.profile.image | prepend: '/assets/images/' | relative_url }}">
  <!-- <i>Site Web en construction</i> -->

  <div class="section-item boxshadow">
    <!-- <h1 class="bandeau-name">{{ site.name | default: "Logan De Jesus" }}</h1> -->
    <!-- <div class="bandeau-desc">{{ site.description | default: "pb" }}</div> -->

    <p class="bandeau-intro">
       Bonjour, après avoir passé <strong>2 ans d'IUT à Montpellier</strong> et <strong>3 ans de formation au CNAM en ingénieur informatique et multimédia à Toulon</strong>, je suis maintenant diplômé et je suis devenu professionnel dans la création de jeux vidéo, Chef de projet et Lead Developper notamment en réalité virtuelle.
    </p>

    <ul class="bandeau-icons" aria-label="Icônes de profil">
      {% assign icons = site.static_files | where_exp: "f", "f.path contains 'assets/images/profileicons/'" | sort: "name" %}
      {% for icon in icons %}
        <li>
            <img src="{{ icon.path | relative_url }}" alt="{{ icon.name }}" loading="lazy" />
        </li>
      {% endfor %}

    </ul>
  </div>


</div>

<section class="section-item boxshadow">
	<h2>Mon Histoire</h2>
		<div class="timeline">
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="year">2025</div>
                    <div class="role">Diplômé, CDD 5 Mois au CNAM</div>
                    <div class="institution">Ingénieur développeur et Chef de projet XR</div>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="year">2022–2025</div>
                    <div class="role">Formation d'ingénieur au CNAM</div>
                    <div class="institution">Ingénieur Informatique & multimédia en alternance</div>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="year">2020–2022</div>
                    <div class="role">Études à l'IUT de Montpellier</div>
                    <div class="institution">DUT Informatique</div>
                </div>
            </div>
			</div>
</section>

<section class="section-item boxshadow">
	<h2>Compétences Techniques</h2>
		<div>
			<ul>
			<li>Langages : C#, Python, Java, C, HTML/CSS, JavaScript</li>
			<li>Moteurs : Unity (C#), Unreal Engine (Blueprints)</li>
			<li>Outils : Git, Blender, Visual Studio, JIRA</li>
			<li>Spécialisations : Réalité Virtuelle (VR), Graphismes Temps Réel, Prototypage Rapide, Design de Jeux</li>
		</ul>
		</div>
</section>


<section class="section-item boxshadow">
	<h2>Infos Rapides</h2>
		<div>
			<ul>
			<li>Localisation : Montpellier, Toulon, où je veux !</li>
			<li>Domaines : Jeux vidéo, Réalité virtuelle</li>
			<li>Statut : Disponible pour collaborations et missions</li>
			<li><a href="{{site.baseurl}}/assets/cv-dejesus-logan.pdf">Télécharger mon CV</a> </li>
		</ul>
		</div>
</section>

<section class="section-item boxshadow">
<h2> Projets & Contact </h2>
<p>Parcourez la section <a href="{{site.baseurl}}/Projects"> Projets </a> pour voir mes réalisations. Si vous souhaitez me contacter ou collaborer, utilisez les liens en bas de page.</p>
</section>

