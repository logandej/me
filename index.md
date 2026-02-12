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
                    <div class="role">Formation d'ingénieur au CNAM (Conservatoir national des arts et métier)</div>
                    <div class="institution">Ingénieur Informatique & multimédia en alternance</div>
					<p> 
					 	Après avoir réussi le concours d'admission du Cnam, je suis parti à Toulon pour les études sans avoir de logement ni d'entreprise d'apprentissage. Ce n'est qu'une fois sur place, le premier jour de classe, que j'ai été accepté en apprentissage par le service du pôle innovation du Cnam et ai trouvé un logement. Ce fut 3 années exceptionnelles, avec une promo hors du commun et riche en relation. Nous avons réalisés tellement de <a href="{{site.baseurl}}/projects"><i>Projets</i></a> innovants. Des concours :
             <a href="{{site.baseurl}}/projects/the-no-meds-land/"><i>The no Meds Land</i></a>, des applications interactives pour des musées :
             <a href="{{site.baseurl}}/projects/compsognathus/"><i>Compsognathus</i></a> etc... .
          </p>
          <p>
              Mais le plus impressionnant en réalité sont mes projets d'entreprise, en étant lead developer et chef de projet pour la plupart. Par exemple l'application de 
             <a href="{{site.baseurl}}/projects/extrudicc-reducticc/"><i>Maintenance Industrielle VR</i></a> pour le lycée Jean Perrin à Marseille. Ou encore quand je suis partie aux Pays-Bas pour travailler avec un partenaire pour développer <a href="{{site.baseurl}}/projects/metagreen-skills/"><i>Metagreen Skills</i></a> dans le métavers. Et le top du top : mon Projet de Fin d'étude pour le département du Var avec le musée virtuel :  <a href="{{site.baseurl}}/projects/artreva/"><i>Artreva</i></a>.
					</p>
                </div>
            </div>            
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="year">2020–2022</div>
                    <div class="role">Études à l'IUT de Montpellier</div>
                    <div class="institution">DUT Informatique</div>
					<p>
						À l’IUT Informatique de Montpellier, j’ai acquis des bases solides en algorithmique, en programmation orientée objet et en conception logicielle. Cette formation m’a appris à structurer mon code, analyser des problèmes et développer des solutions propres et maintenables. Grâce à ces compétences, j’ai pu me lancer dans le développement de jeux sur Unity en C#. J'ai créé beaucoup de mini-jeux et j'ai rapidement pris le logiciel en main. Avec mes amis, nous avons réalisés notre première Code Game Jam, organisée par l'université. C'était en distanciel à cause du Covid-19 mais c'était une expérience incroyable, surtout suite à notre victoire. On peut dire que ces 2 ans m'ont confirmés que je voulais continuer dans le jeu vidéo.
					</p>
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

