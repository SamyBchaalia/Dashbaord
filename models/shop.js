class Shop {
    constructor( id,
        storeName,
      storeDescriptionShort,
      storeDescription,
      storeImage,
     storeLocation,
      openingHour,
      longitude,
       latitude,email,password) {
            this.id = id;
            this.storeName = storeName;
            this.storeDescriptionShort = storeDescriptionShort;
            this.storeDescription = storeDescription;
           
            this.storeLocation = storeLocation; 
            this.storeImage=storeImage;
            this.openingHour = openingHour;
                 
            this.longitude=longitude;    
            this.latitude=latitude;   
            this.email=email;
            this.password=password;

}

}


module.exports = Shop;