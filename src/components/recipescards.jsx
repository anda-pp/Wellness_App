import React from 'react';

const recipes = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      },
      {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      },
  ]
  
  const RecipesCards= () => {
    return (
        <div style={styles.container}>
          <h2>Recipes</h2>
  
          <div style={styles.grid}>
            {recipes.map((recipe) => (
              <a key={recipe.id} href={recipe.href} style={styles.card}>
                 <div style={styles.imageWrapper}>
                <img
                  src={recipe.imageSrc}
                  style={styles.image}
                />
                </div>
                <h3 style={styles.title}>{recipe.name}</h3>
              </a>
            ))}
          </div>
        </div>
    );
  };
  
  
const styles = {
    container: {
        padding: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
    },
    card: {
        textAlign: 'center',
    },
    imageWrapper: {
        width: '100%',
        paddingTop: '100%', 
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    title: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#555',
    },
};
  export default RecipesCards;