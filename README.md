# TP : Pipeline CI/CD - Convertisseur de Devises

Ce projet implémente une chaîne de déploiement continu (CI/CD) automatisée pour une application Node.js.

## Fonctionnement du Pipeline
Le workflow GitHub Actions est divisé en 4 étapes clés (Jobs) :
1. **Tests Unitaires** : Validation de la logique métier (calculs de conversion) avec Jest.
2. **Tests E2E** : Vérification que l'API répond correctement aux requêtes HTTP.
3. **Build & Push Docker** : Création d'une image Docker de l'application et publication sur Docker Hub (uniquement si les tests réussissent).
4. **Deploy sur VM Azure** : Connexion SSH à la VM, récupération de la dernière image et redémarrage du conteneur de manière idempotente.

## Déclenchement du Déploiement
Le déploiement est **automatique**. Il se déclenche à chaque `push` sur la branche `main`. Cela garantit que la version en production sur Azure est toujours synchronisée avec le code validé.

## Choix Techniques
* **Docker** : Pour garantir que l'application fonctionne de la même manière sur mon Mac et sur le serveur Azure (portabilité).
* **GitHub Actions** : Pour sa simplicité d'intégration avec le dépôt de code et la gestion sécurisée des secrets.
* **Azure VM (Ubuntu)** : Pour l'hébergement cloud, offrant une IP publique fixe et un environnement Linux robuste.
* **Idempotence** : Le script de déploiement utilise `docker stop || true` pour s'assurer que le pipeline ne plante pas si le conteneur n'existe pas encore.