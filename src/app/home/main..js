class TabLink {
    constructor(student) {
     this.student = student;

      this.data = student.dataset.tab;
      console.log(this.data);
 
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

      this.TabItem = new TabItem(this.itemElement)

      this.student.addEventListener('click', () => this.select());
    };
  
    select() {
      console.log('LOGGED');
 
      const links = document.querySelectorAll('.tab-link');

      links.forEach(function(current){
        current.classList.remove('tab-link-selected');
      })

      this.student.classList.add('tab-link-selected');
      
     
      this.TabItem.select();
    }
  }
  
  class TabItem {
    constructor(info) {

      this.info = info;
    }
  
    select() {
      console.log('LOGGED');
      const items = document.querySelectorAll('.tabs-item');

      items.forEach(function(current) {
        current.classList.remove('tabs-item-selected');
      });

      this.info.classList.add('tabs-item-selected');
    }
  }
  
  let links = document.querySelectorAll('.tab-link');
  
  links.forEach(function(link) {
    return new TabLink(link);
  });