import { createContext, useState } from "react";

/** CONTEXT APİ
 *
 *Uygulamada birden çok bileşenin  ihtiyaci olan verileri tek bir merkezde yönetmeye yarar
 * Verileri ve bunları değiştirmeye yarayan fonksiyonları tutar
 * Ve bu değişkenleri uygulamadaki herhangi bir bileşene doğrudan aktarabilir.
 
 *
 */

// ! CONTEXT YAPISININ TEMELİNİ OLUŞTURMA
export const Basketcontext = createContext();

// ! sağlayıcı  ve onun tuttuğu veriler tanımlama
export function BasketProvider({ children }) {
  const [basket, setbasket] = useState([]);

  // sepete yeni ürün ekler..

  const addToBasket = (product) => {
    // sepete bu üründen daha önce eklenmiş mi kontrol et
    const found = basket.find((i) => i.id === product.id);
    if (found) {
      //elemanın miktarını arttırır.
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü günceller

      const newbasket = basket.map((i) => (i.id === updated.id ? updated : i));

      // statei güncelle
      setbasket(newbasket);
    } else {
      //Miktarı 1 olarak ayarlayıp ürünü sepete aktar..
      setbasket([...basket, { ...product, amount: 1 }]);
    }
  };
  //sepetten ürün çıkarma
  const removeFromBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (found.amount > 1) {
      // miktarı azalt
      const updated = { ...found, amount: found.amount - 1 };

      // güncel elemanı diziye aktar

      const newbasket = basket.map((i) => (i.id === updated.id ? updated : i));

      // state güncelle 
      setbasket(newbasket);
    } else {

    // Ürünü direkt sepetten kaldır
    const filtred =basket.filter((i) => i.id !==found.id)
 
     // state güncelle
     setbasket(filtred)
    }
  };

  return (
    <Basketcontext.Provider value={{ addToBasket, basket, removeFromBasket }}>
      {children}
    </Basketcontext.Provider>
  );
}
