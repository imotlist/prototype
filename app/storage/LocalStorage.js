import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export const LocalStorage = new Storage({
  // maximum capacity, default 1000
  size: 10000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,
  // cache data in the memory. default is true.
  enableCache: true,
  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

export const SaveStore = ({key=null,id=null, data=null, expired=null}) => {
    // Save something with key only. (using only a keyname but no id)
// This key should be unique. This is for data frequently used.
// The key and value pair is permanently stored unless you remove it yourself.
    if(!key || !data) return;

    if(id){
        LocalStorage.save({
            key: key, // Note: Do not use underscore("_") in key!
            id : id,
            data: data,
            expires: expired
        });
    }else{
        LocalStorage.save({
            key: key,
            data: data,
            expires: expired
        });
    }
}

export const LoadStore = (key=null) => {
    
    if(!key) return;

    return LocalStorage.load({
    key: key,

    // autoSync (default: true) means if data is not found or has expired,
    // then invoke the corresponding sync method
    autoSync: true,

    // syncInBackground (default: true) means if data expired,
    // return the outdated data first while invoking the sync method.
    // If syncInBackground is set to false, and there is expired data,
    // it will wait for the new data and return only after the sync completed.
    // (This, of course, is slower)
    syncInBackground: true,

    // you can pass extra params to the sync method
    // see sync example below
    // syncParams: {
    //   extraFetchOptions: {
    //     // blahblah
    //   },
    //   someFlag: true
    // }
  })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.warn(err.message);
//     switch (err.name) {
//       case 'NotFoundError':
//         // TODO;
//         break;
//       case 'ExpiredError':
//         // TODO
//         break;
//     }
//   });
}