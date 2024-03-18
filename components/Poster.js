AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;   
      this.createPosters();
    },
  
    createPosters: function () {
      const thumbNailsRef = [
        {
          id: "poster1",
          title: "THOR",
          url: "./assets/poster1.png",
        },
        {
          id: "poster2",
          title: "Superman",
          url: "./assets/poster2.png",
        },
  
        {
          id: "poster3",
          title: "Deadpool",
          url: "./assets/poster3.png",
        },
        {
          id: "poster4",
          title: "Avengers",
          url: "./assets/poster4.png",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderEl = this.createBorder(position, item.id);
  
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);

        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 18,
        height: 25,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    }
  });
  