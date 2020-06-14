const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingrList = document.querySelector('#ingredients');

  const createList = item => {
    const listRef = document.createElement('li');
    listRef.textContent = item;
    return listRef;
  };

  const ingrRef = ingredients.map(product => createList(product));

  ingrList.append(...ingrRef);


  
  