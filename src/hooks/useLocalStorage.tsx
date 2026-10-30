import { useEffect, useState } from "react";

export default function useLocalStorage(storageName = "storedData") {
  const [storage, setStorage] = useState<Record<string, any>>({});
  useEffect(() => {
    try {
      const localStorage = window.localStorage.getItem(storageName);
      const localJson = localStorage ? JSON.parse(localStorage) : {};
      localJson && setStorage(localJson);
    } catch (e: any) {
      console.error(`Could not retrieve localStorage${e.message ? `\n${e.message}` : ""}`);
    }
  }, [storageName]);

  function setStorageItem(name:string, value:any){
    setStorage((previousStorage) => {
      const newStorage = {
        ...previousStorage,
        [name]: value,
      };

      window.localStorage.setItem(storageName, JSON.stringify(newStorage));

      return newStorage;
    });
  }
  return {storageData: storage, setStorageItem}
}
