function combineArrays(warna, baju, promo) {
    const result = []
    
    for (let i = 0; i < Math.min(warna.length, baju.length, promo.length); i++) {
      const formattedString = `${capitalize(baju[i])} ${capitalize(warna[i])} ${capitalize(promo[i])}`;
      result.push(formattedString);
    }
    
    if (warna.length > baju.length) {
      for (let i = baju.length; i < warna.length; i++) {
        result.push(`Baju ${capitalize(warna[i])} Diskon`)
      }
    }
  
    return result;
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }
  
  const warna = ["merah", "kuning", "hijau", "pink", "ungu", "maroon"]
  const baju = ["baju", "celana", "topi", "jaket", "sepatu"]
  const promo = ["Diskon", "Sale", "Diskon", "Sale", "Sale"]
  
  const result = combineArrays(warna, baju, promo);
  console.log(result);
  