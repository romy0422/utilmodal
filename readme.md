# Composant UtilModal

Le composant `UtilModal` est une modale personnalisable pour les applications React, il prend en charge les thèmes et le contenu dynamique. Il offre une manière simple et flexible d'afficher des pop-ups dans une application.

## Prérequis

- Node.js version 18
- React version 18

## Fonctionnalités

- **Support des thèmes** : Appliquez facilement des thèmes personnalisés pour correspondre à la conception de votre application.
- **Contenu dynamique** : Prend en charge le rendu de tout composant React ou élément HTML comme contenu.
- **Contrôle de la visibilité** : Contrôlé via une prop booléenne pour faciliter l'affichage et le masquage de la modale.
- **Bouton de fermeture** : Inclut un bouton de fermeture qui peut être thématisé dans la modale pour la fermer.

## Props

| Prop       | Type       | Description                                              |
|------------|------------|----------------------------------------------------------|
| `theme`    | `string`   | Nom du thème pour appliquer un style spécifique.         |
| `children` | `node`     | Le contenu à afficher dans la modale.                    |
| `isOpen`   | `boolean`  | Contrôle la visibilité de la modale.                     |
| `onClose`  | `function` | Fonction à appeler pour fermer la modale.                |

## Utilisation

Voici un exemple simple d'utilisation du composant `UtilModal` dans une application React :

```jsx
import React, { useState } from 'react';
import UtilModal from 'UtilModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const ouvrirModal = () => setIsOpen(true);
  const fermerModal = () => setIsOpen(false);

  return (
    <div className="App">
      <button onClick={ouvrirModal}>Ouvrir la modale</button>
      <UtilModal isOpen={isOpen} onClose={fermerModal} theme="green">
        <p>Ceci est la fenêtre modale. Ajoutez des formulaires, des images ou tout autre contenu.</p>
      </UtilModal>
    </div>
  );
}
```
## Thèmes Disponibles

Le composant `UtilModal` prend en charge plusieurs thèmes pour personnaliser son apparence. Voici les thèmes disponibles et leur description :

### Vert (`"green"`)
- **Fond de la modale** : Vert clair transparent
- **Contenu de la modale** : Vert vif
- **Bouton de fermeture** : Vert foncé avec texte jaune

### Rose (`"pink"`)
- **Fond de la modale** : Rose transparent
- **Contenu de la modale** : Rose clair
- **Bouton de fermeture** : Violet avec texte rose pâle

### Bleu (`"blue"`)
- **Fond de la modale** : Bleu transparent
- **Contenu de la modale** : Bleu clair
- **Bouton de fermeture** : Bleu foncé avec texte bleu pâle

### Noir (`"black"`)
- **Fond de la modale** : Gris transparent
- **Contenu de la modale** : Gris moyen
- **Bouton de fermeture** : Noir avec texte blanc

Pour appliquer un thème à votre modale, passez simplement le nom du thème comme prop `theme` au composant `UtilModal`. Par exemple, pour utiliser le thème vert, faites comme suit :

```jsx
<UtilModal isOpen={isOpen} onClose={fermerModal} theme="green">
  <p>Ceci est le contenu de votre modale.</p>
</UtilModal>
