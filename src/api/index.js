export default {
  addImage: function(image) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('<imgUrl>');
      }, 3000);
    });
  },

  fetchImages: function(user = null) {
    const images = [
      { id: 1, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Naia' } },
      { id: 2, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Mike_1982' } },
      { id: 5, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Sharer1' } },
      { id: 3, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Naia' } },
      { id: 6, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Sharer1' } },
      { id: 4, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Sharer1' } },
      { id: 7, src: '<imgUrl>', user: { pic: '<imgUrl>', name: 'Sharer1' } }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( images.filter(img => !user || user === img.user.name));
      }, 1500);
    });
  }
};
