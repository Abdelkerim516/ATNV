#  Site Web de l'ATNV (Association Tchadienne pour la Non-Violence)

Ce projet est un site web professionnel développé pour **l’ATNV**, une organisation qui lutte pour la non violence au tchad

---

##  Aperçu du site

### Accueil
![Accueil](./src//captures//atnv.png)



---

##  Technologies utilisées

- **React** avec **TypeScript** : pour une architecture moderne et robuste.
- **Tailwind CSS** : pour un design rapide, propre et responsive.
- **React Router DOM** : pour la gestion des routes et la navigation entre les pages.

---

##  Structure du projet

src/
├── assets/ # Images et ressources statiques
├── components/ # Composants réutilisables : Header, Footer, Hero, Features
├── layouts/ # Layout principal pour le rendu global
├── pages/ # Pages principales du site : Accueil, Contact, Faire un don, etc.
├── App.tsx # Configuration globale des routes
└── main.tsx # Point d’entrée de l’application


---

##  Fonctionnalités principales

-  Page d'accueil avec image héro et messages forts
-  Présentation des activités et objectifs de l'ATNV
-  Page de contact avec formulaire
-  Formulaire de dons (monétaires ou en nature)
-  Navigation fluide entre les pages





##  Installation

```bash
# Clone du dépôt
git clone https://github.com/votre-utilisateur/atnv-site.git
cd atnv-site

# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev
