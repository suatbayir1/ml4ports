const goods = [
  {
    "date": "2019-01",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 17
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 146
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 83
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 11
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 6
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 39
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Canlı hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 121
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 29
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 896
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 195
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 504
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 89
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 33
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 431
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 2
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 117
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 561
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 137
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 31
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 5
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 53
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 409
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 4
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 29
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 23
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 91
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 152
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 468
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 8
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 864
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1143
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 255
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 83
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1379
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 142
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 48
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 59
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 196
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 133
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 149
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 115
  },
  {
    "date": "2019-01",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 172
  },
  {
    "date": "2019-02",
    "count": 4542
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 30
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 71
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 125
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 10
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Canlı hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 117
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 28
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 74
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 755
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 326
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 543
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 11
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 26
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 483
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 5
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 162
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 518
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 194
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 30
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 17
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 13
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 45
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 112
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 74
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 5
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 69
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 86
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 128
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1032
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 17
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 13
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 560
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1074
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 59
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1088
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 73
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 31
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 5
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 40
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 192
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 182
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 199
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 45
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 115
  },
  {
    "date": "2019-02",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 91
  },
  {
    "date": "2019-03",
    "count": 4893
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 25
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 91
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 156
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 50
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 5
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 266
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 18
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 66
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 703
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 366
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 184
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 36
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 712
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 242
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 785
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 472
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 69
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 4
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 11
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 2
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 550
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 44
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 33
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 103
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 213
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1580
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 12
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1057
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1270
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 121
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1494
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 16
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 25
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 28
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 311
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 152
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 224
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 128
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 62
  },
  {
    "date": "2019-03",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 40
  },
  {
    "date": "2019-04",
    "count": 5927
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 29
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 173
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 98
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 23
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 6
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 250
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 57
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 51
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 669
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 175
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 868
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 5
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 9
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 27
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 799
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 368
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 624
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 161
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 32
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 27
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 21
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 30
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 238
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 57
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 14
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 35
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 90
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 551
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 953
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 10
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1711
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1504
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 197
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 32
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1699
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 41
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 43
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 8
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 58
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 275
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 196
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 200
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 144
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 14
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 38
  },
  {
    "date": "2019-04",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 34
  },
  {
    "date": "2019-05",
    "count": 4041
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 157
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 146
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 81
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 14
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 2
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 21
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Canlı hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 265
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 102
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 768
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 183
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1024
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 13
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 18
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 712
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 4
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 240
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 603
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 71
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 35
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 150
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 51
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 21
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 90
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 468
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 16
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 231
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 7
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2372
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1539
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 220
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1572
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 34
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 54
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 50
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 353
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 186
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 184
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 97
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 28
  },
  {
    "date": "2019-05",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 25
  },
  {
    "date": "2019-06",
    "count": 3517
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 188
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 53
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 79
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 6
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 4
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 5
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 312
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 72
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 489
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 273
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 843
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 33
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 398
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 227
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 242
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 161
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 64
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 19
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 26
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 30
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 16
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 4
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 77
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 719
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 722
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 10
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1843
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1741
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 223
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1507
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 39
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 50
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 5
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 24
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 162
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 210
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 194
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 12
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2019-06",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2019-07",
    "count": 3658
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 114
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 121
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 109
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 40
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 40
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 6
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 209
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 108
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 71
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 494
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 266
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1317
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 5
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 36
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 7
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 30
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 622
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 539
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 542
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 128
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 42
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 32
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 11
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 28
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 5
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 107
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 66
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 748
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 420
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 3
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2845
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1188
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 29
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 41
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1118
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 97
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 56
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 57
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 454
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 244
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 157
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 46
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 17
  },
  {
    "date": "2019-07",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 48
  },
  {
    "date": "2019-08",
    "count": 4329
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 74
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 52
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 108
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 10
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 171
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 2
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 256
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 61
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 214
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 580
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 375
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 652
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 81
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 21
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 28
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 576
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 423
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 643
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 221
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 64
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 2
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 26
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 10
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 82
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 480
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 675
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 5
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2368
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1164
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 28
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 22
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1199
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 64
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 38
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 39
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 489
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 146
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 237
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 68
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 63
  },
  {
    "date": "2019-08",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 73
  },
  {
    "date": "2019-09",
    "count": 4299
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 9
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 50
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 31
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 208
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 23
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 2
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 4
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 135
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 24
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 71
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 793
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 380
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 411
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 14
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 35
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 41
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 18
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 58
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 521
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 685
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 551
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 295
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 6
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 164
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Mantar ve mantardan eşya.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 6
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 80
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 10
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 21
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 39
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 76
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 332
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 619
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 155
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 62
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 15
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 59
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 882
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1433
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 39
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 33
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 712
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 208
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 17
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 7
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 80
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 243
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 285
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 216
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 65
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 55
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 57
  },
  {
    "date": "2019-09",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 93
  },
  {
    "date": "2019-10",
    "count": 6016
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 36
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 81
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 18
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 20
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 23
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 113
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 55
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 648
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 362
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 30
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 37
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 68
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 643
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 602
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 476
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 160
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 8
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 42
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 25
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 110
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 9
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 25
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 38
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 126
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 293
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 419
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 30
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 9
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 804
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1160
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 76
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 21
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 449
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 793
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 45
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 63
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 263
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 150
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 572
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 19
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 182
  },
  {
    "date": "2019-10",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 83
  },
  {
    "date": "2019-11",
    "count": 3760
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 47
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 49
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 76
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 18
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 21
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 60
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 46
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 580
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 223
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 2
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 53
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 18
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 73
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 485
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 230
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 539
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 213
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 54
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 22
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 56
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 91
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 21
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 38
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 71
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 191
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 714
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 2
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 821
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1166
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 131
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 20
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 641
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 621
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 7
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 7
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 78
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 315
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 231
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 620
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 92
  },
  {
    "date": "2019-11",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 30
  },
  {
    "date": "2019-12",
    "count": 3816
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 127
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 69
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 131
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 12
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 8
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 13
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 5
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 38
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 20
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 46
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 588
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 377
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 97
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 13
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 85
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 46
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 749
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Hava taşıtları, uzay taşıtları ve bunların aksam ve parçalar.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 177
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 468
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 44
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 118
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 17
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 27
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 11
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 9
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Kürkler ve taklit kürkler; bunların mamulleri",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 20
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 41
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 20
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 33
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 25
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 99
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 413
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 80
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 692
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1058
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 151
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 22
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 424
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 863
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 2
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 12
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 88
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Şemsiyeler, güneş şemsiyeleri, bastonlar vb.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 1
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 244
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 150
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 597
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 19
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 92
  },
  {
    "date": "2019-12",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 18
  },
  {
    "date": "2020-01",
    "count": 5160
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 11
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 61
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 67
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 89
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 9
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 28
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 72
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 14
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 41
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 651
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 355
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Diğer hayvansal menşeli ürünler ",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 53
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 19
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 163
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 66
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 783
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 234
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 422
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 29
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 128
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 47
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 29
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 19
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Lak; bitkisel özsu ve hülasalar.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 27
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 133
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 42
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 49
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 63
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 416
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 312
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 9
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1426
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1144
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 92
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 32
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 544
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1107
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 23
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 112
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 276
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 44
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 635
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 102
  },
  {
    "date": "2020-01",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 119
  },
  {
    "date": "2020-02",
    "count": 4053
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 49
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 38
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 94
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 15
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 4
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 63
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 41
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 775
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 299
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 176
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 132
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 131
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 70
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 642
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 443
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 488
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 16
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 127
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 47
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 37
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 2
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 34
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Kürkler ve taklit kürkler; bunların mamulleri",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 3
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 87
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 10
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 17
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 66
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 218
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 539
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 9
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1352
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 806
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 33
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 34
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 506
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 828
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 8
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 16
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 104
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Şemsiyeler, güneş şemsiyeleri, bastonlar vb.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 2
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 276
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 194
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 590
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 136
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 74
  },
  {
    "date": "2020-02",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 36
  },
  {
    "date": "2020-03",
    "count": 5134
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 92
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 125
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 203
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 17
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Barut ve patlayıcı maddeler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 7
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 3
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 61
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 27
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 71
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 710
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 303
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 7
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 347
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 8
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 53
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Gemiler ve suda yüzen taşıt ve araçlar",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 8
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 733
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 6
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Hava taşıtları, uzay taşıtları ve bunların aksam ve parçalar.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 6
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 362
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 491
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 64
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 120
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 81
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 35
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 15
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 36
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Kürkler ve taklit kürkler; bunların mamulleri",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 32
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 48
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 29
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 89
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 381
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 727
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 11
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2253
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1610
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Saatler ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 75
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 31
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 402
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 570
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 80
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Şemsiyeler, güneş şemsiyeleri, bastonlar vb.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 6
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 320
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 175
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 778
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 17
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 61
  },
  {
    "date": "2020-03",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 33
  },
  {
    "date": "2020-04",
    "count": 5301
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 112
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 120
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 41
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 118
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 11
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 16
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 37
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 445
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 200
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Diğer hayvansal menşeli ürünler ",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 42
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 122
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 220
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 4
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Hava taşıtları, uzay taşıtları ve bunların aksam ve parçalar.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 41
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 253
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 518
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 75
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 39
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 606
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 21
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 38
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 51
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 743
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 666
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1743
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1696
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 139
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 410
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 390
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 28
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 5
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 89
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Tabii veya kültür inciler, kıymetli veya yarı kıymetli taşlar vb.",
    "count": 3
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 500
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 89
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 570
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 9
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 10
  },
  {
    "date": "2020-04",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 74
  },
  {
    "date": "2020-05",
    "count": 4708
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 88
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 59
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 89
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 3
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 2
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 41
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 13
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 220
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 282
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 97
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 197
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 66
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 224
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 185
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 522
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 88
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 28
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 2
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 727
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 44
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 41
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 660
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 727
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 829
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1433
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 93
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 18
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 240
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 212
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 13
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 93
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 392
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 70
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 508
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 14
  },
  {
    "date": "2020-05",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 30
  },
  {
    "date": "2020-06",
    "count": 3632
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 31
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 111
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 54
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 8
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 33
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 35
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 46
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 262
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 499
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 27
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 122
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 45
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 271
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 284
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 667
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 96
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 40
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 9
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Lak; bitkisel özsu ve hülasalar.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 698
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 22
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 27
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 144
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 232
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1554
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 780
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1608
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 89
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 355
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 532
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 48
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 76
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Şemsiyeler, güneş şemsiyeleri, bastonlar vb.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 311
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 80
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 615
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 16
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 17
  },
  {
    "date": "2020-06",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 6
  },
  {
    "date": "2020-07",
    "count": 3158
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 92
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 104
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 55
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 18
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 23
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 4
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 43
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 31
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 496
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 523
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 52
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 132
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 68
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 557
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 234
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 723
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 137
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 56
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 10
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 11
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 71
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 21
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 28
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 284
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 214
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 789
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 28
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1068
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1553
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 179
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 24
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 415
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 869
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 119
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 638
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 51
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 15
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 602
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 15
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 22
  },
  {
    "date": "2020-07",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 85
  },
  {
    "date": "2020-08",
    "count": 3322
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 49
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 81
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 131
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 76
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 10
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Barut ve patlayıcı maddeler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 28
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 43
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 554
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 477
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 44
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 55
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 7
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 16
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 621
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 458
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 478
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 105
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 175
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 59
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 8
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 10
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 9
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 22
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 32
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 231
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 627
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 556
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 9
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 24
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 17
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1162
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 2590
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 258
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 24
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 628
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1220
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 30
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 8
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 100
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 214
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 100
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 622
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 21
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 45
  },
  {
    "date": "2020-08",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 89
  },
  {
    "date": "2020-09",
    "count": 4371
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 10
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 90
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 80
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 102
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 13
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Barut ve patlayıcı maddeler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 10
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 47
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 34
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 799
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 519
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 99
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 99
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 85
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 750
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 821
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 761
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 49
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 222
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 3
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 28
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 748
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 7
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 282
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 278
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 2
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 965
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 13
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 19
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 864
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1618
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 128
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 20
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 643
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 975
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 6
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 84
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 234
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 118
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 585
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 69
  },
  {
    "date": "2020-09",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 178
  },
  {
    "date": "2020-10",
    "count": 3900
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 112
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 107
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 183
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 11
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 4
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 39
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 54
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 942
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 432
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 4
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 27
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 171
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 897
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 267
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 787
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 166
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 18
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 6
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 10
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 318
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 10
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 2
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 174
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 269
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 2
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 420
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 8
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 558
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1091
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 80
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 33
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 422
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1055
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 33
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 7
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 140
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 35
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 154
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 355
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 3
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 111
  },
  {
    "date": "2020-10",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 91
  },
  {
    "date": "2020-11",
    "count": 6352
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 43
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 37
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 64
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 121
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 27
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 25
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Canlı hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 42
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 10
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 6
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 776
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 625
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Diğer hayvansal menşeli ürünler ",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 88
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 18
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 141
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 86
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 812
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 267
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 665
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 9
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 87
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 62
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 58
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 46
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 374
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 6
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 35
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 19
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 78
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Müzik aletleri; bunların aksam, parça ve aksesuarı.",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Nikel ve nikelden eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 177
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 167
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 5
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 709
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 4
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 8
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 26
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 1
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 612
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1025
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 68
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 21
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 453
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 985
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 5
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 9
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 71
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 109
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 177
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 10
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 334
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 16
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 17
  },
  {
    "date": "2020-11",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 54
  },
  {
    "date": "2020-12",
    "count": 3178
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 52
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 45
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 200
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 44
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 11
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 15
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 28
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 37
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 512
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 184
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 21
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 310
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 41
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 819
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 254
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 688
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 122
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 3
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 323
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 1
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 51
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 46
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 128
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 145
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 681
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 15
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 16
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 399
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1497
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 153
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 14
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 503
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1011
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 14
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 103
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 278
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 240
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 352
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 21
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 14
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 60
  },
  {
    "date": "2020-12",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 84
  },
  {
    "date": "2021-01",
    "count": 3631
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 19
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 48
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 40
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 21
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 67
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Canlı hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 9
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 33
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 51
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 732
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 117
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 80
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 18
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 26
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 633
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 101
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 681
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 71
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 25
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 348
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 25
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 26
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Müzik aletleri; bunların aksam, parça ve aksesuarı.",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 109
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 205
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 474
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 683
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1141
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 79
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 14
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 658
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1033
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 26
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 5
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 84
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 173
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 137
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 266
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 48
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 36
  },
  {
    "date": "2021-01",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 249
  },
  {
    "date": "2021-02",
    "count": 4424
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 18
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 96
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 37
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 15
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 47
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 51
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Çinko ve çinkodan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 13
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 348
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 101
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Diğer hayvansal menşeli ürünler ",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 9
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 41
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 144
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 946
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 51
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 583
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 194
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 7
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 10
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 350
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 12
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 33
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 85
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 178
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 671
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 39
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 3
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 456
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1312
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 132
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 42
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 586
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 919
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 25
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 120
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Tabii veya kültür inciler, kıymetli veya yarı kıymetli taşlar vb.",
    "count": 6
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 30
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 106
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 321
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2021-02",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 63
  },
  {
    "date": "2021-03",
    "count": 2811
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 12
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 56
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 94
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 23
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 43
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 62
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 110
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 707
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 314
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 12
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 26
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 51
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 165
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 31
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 36
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 16
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 515
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 53
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 969
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 133
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 21
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 26
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 198
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 34
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 11
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 6
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 51
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Nikel ve nikelden eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 19
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 128
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 294
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 428
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 14
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 4
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1212
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1982
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 47
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 426
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 970
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 2
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 7
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 78
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 106
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 188
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 301
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 21
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 11
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 15
  },
  {
    "date": "2021-03",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 26
  },
  {
    "date": "2021-04",
    "count": 1534
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 11
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 36
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 67
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 45
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 14
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 5
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 50
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 13
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 859
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 175
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 76
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 34
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 88
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 75
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 16
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 619
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 66
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 403
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 168
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 9
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 11
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 24
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 1
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 46
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 17
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 47
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 157
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 198
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 429
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 39
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 1
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1811
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1420
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 23
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 747
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 874
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 3
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 122
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 55
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 69
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 353
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 44
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 15
  },
  {
    "date": "2021-04",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 29
  },
  {
    "date": "2021-05",
    "count": 1782
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 44
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 186
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 93
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 6
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 16
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 31
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 29
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 100
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 598
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 184
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 2
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 13
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 29
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 42
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 95
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 584
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 164
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 423
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 3
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 173
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 41
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 11
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 91
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 15
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 64
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Müzik aletleri; bunların aksam, parça ve aksesuarı.",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 5
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 90
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 167
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 292
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 6
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 15
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 3
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1452
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 2059
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 75
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 663
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 939
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 11
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 8
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 145
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 120
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 142
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 10
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 330
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 12
  },
  {
    "date": "2021-05",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2021-06",
    "count": 1516
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 14
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 43
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 91
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 72
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 11
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 32
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 77
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 88
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 703
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 235
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 17
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 25
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 14
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 39
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 480
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 281
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 392
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 190
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 31
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 7
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 7
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 139
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 26
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 1
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 103
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 127
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 106
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 2
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 333
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 32
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 8
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1545
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 998
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 36
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 407
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1000
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 83
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 75
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 48
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 270
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 279
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 14
  },
  {
    "date": "2021-06",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2021-07",
    "count": 1602
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 41
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 48
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 82
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 25
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 3
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 1
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 17
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 36
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 56
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 581
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 524
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 44
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 18
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 237
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 99
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 403
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 70
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 796
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 14
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 288
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 30
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 5
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 137
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 22
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 14
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 93
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 107
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 116
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 416
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 17
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 7
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1084
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1203
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 55
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 21
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 620
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 724
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 228
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 79
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 79
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 121
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 256
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 32
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 16
  },
  {
    "date": "2021-07",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 5
  },
  {
    "date": "2021-08",
    "count": 2754
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 7
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 6
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 49
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 70
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 67
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 8
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 12
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 88
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 79
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 868
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 643
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 14
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 73
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 82
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 508
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 122
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 689
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 233
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 25
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 12
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 16
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 29
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 46
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 6
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 18
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 7
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 34
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 190
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 329
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 588
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 14
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 10
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 2
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1992
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1414
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 28
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 31
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 648
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 743
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 23
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 12
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 83
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 145
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 140
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 313
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 19
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 48
  },
  {
    "date": "2021-08",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 35
  },
  {
    "date": "2021-09",
    "count": 3003
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 29
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 112
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 114
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 11
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 4
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 16
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 85
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 73
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1284
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 349
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Diğer bitkisel ürünler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 64
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 100
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 6
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 473
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 114
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 697
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 208
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 37
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 4
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 117
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 3
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 29
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 8
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 40
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Müzik aletleri; bunların aksam, parça ve aksesuarı.",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Nikel ve nikelden eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 175
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 98
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 17
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 11
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1043
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1002
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 36
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 24
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 403
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 792
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 5
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 44
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 87
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 10
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 82
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 294
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 54
  },
  {
    "date": "2021-09",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 129
  },
  {
    "date": "2021-10",
    "count": 2055
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 9
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 16
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 181
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 99
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 6
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 68
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 60
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 19
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 844
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 357
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 17
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 952
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 54
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 345
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 105
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Hazırlanmış ince ve kalın kuş tüyleri ve bunlardan eşya",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 821
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 79
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 20
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 179
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 73
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 13
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 76
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 40
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Müzik aletleri; bunların aksam, parça ve aksesuarı.",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 188
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 87
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 4
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 196
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 4
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 687
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1363
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 42
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 34
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 328
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 656
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 17
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 69
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Tabii veya kültür inciler, kıymetli veya yarı kıymetli taşlar vb.",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 46
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 85
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 296
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 25
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 33
  },
  {
    "date": "2021-10",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 32
  },
  {
    "date": "2021-11",
    "count": 2408
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 56
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 31
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 34
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 7
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 18
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 44
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 9
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 833
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 641
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 3
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 24
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 27
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 65
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 40
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 403
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 53
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 397
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 117
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 71
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 68
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 11
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 14
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 21
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 193
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 59
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 59
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 12
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 950
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1124
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 52
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 34
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 251
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 574
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 72
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 85
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 47
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 34
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 265
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 5
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 15
  },
  {
    "date": "2021-11",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 53
  },
  {
    "date": "2021-12",
    "count": 2991
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 36
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 74
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 25
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 3
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Basılı kitaplar, gazeteler, resimler ve baskı sanayiinin diğer mamulleri",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 5
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 21
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 39
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1000
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 248
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 8
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Diğer hayvansal menşeli ürünler ",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 127
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 38
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 13
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 119
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 17
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 189
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 15
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 454
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 48
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 440
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 67
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 288
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 99
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 47
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 31
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 161
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 14
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 64
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 51
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 42
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 261
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 192
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 5
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 213
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 2
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 31
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 654
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1868
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 25
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 45
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 426
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 824
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 151
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 34
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 86
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 123
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 110
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 345
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 6
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 41
  },
  {
    "date": "2021-12",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 234
  },
  {
    "date": "2022-01",
    "count": 2801
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 3
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 40
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 113
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 114
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 3
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 9
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 20
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 63
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 13
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 16
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 625
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 313
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 60
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 15
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 67
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 326
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 27
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 399
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 115
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 467
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 80
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 207
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 64
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 13
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 21
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 16
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 115
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 36
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 59
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 99
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 45
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 247
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 196
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 3
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 37
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 5
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1157
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1481
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 76
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 33
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 331
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 555
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 70
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 27
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 149
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 26
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 152
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 29
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 3
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 279
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 32
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 43
  },
  {
    "date": "2022-01",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 372
  },
  {
    "date": "2022-02",
    "count": 3474
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 17
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 92
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 86
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 5
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 5
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 23
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 25
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 796
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 517
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 17
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 21
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 217
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 4
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 96
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 18
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 244
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 41
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 380
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 268
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 27
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 22
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 8
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 51
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 76
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 9
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 9
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 50
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 35
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 90
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 119
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 6
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 23
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 8
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 995
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1027
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 14
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 703
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 744
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 112
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 30
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 85
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 226
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 152
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 294
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Yapağı ve yün; at kılından iplik ve dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 29
  },
  {
    "date": "2022-02",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 23
  },
  {
    "date": "2022-03",
    "count": 2596
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 20
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 166
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 93
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 4
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Başlıklar ve aksamı ",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 8
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 26
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 45
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 777
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 384
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 28
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 32
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 69
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 233
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Hasırdan, sazdan veya örülmeye elverişli diğer maddelerden mamuller",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 262
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 124
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Kalay ve kalaydan eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 19
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 123
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Mineral yakıtlar, mineral yağlar ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 3
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 31
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 5
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 42
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 112
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 100
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 34
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1576
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1688
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 20
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 510
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 630
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 60
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 9
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 97
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 186
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 94
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 4
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 283
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 22
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 8
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 24
  },
  {
    "date": "2022-03",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 18
  },
  {
    "date": "2022-04",
    "count": 3020
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 14
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 113
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 158
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 111
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 5
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 39
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 25
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 542
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 780
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 13
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Dokumaya elverişli diğer bitkisel lifler; kağıt ipliği vb.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 33
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 12
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Et, balık, kabuklu hayvanlar vb.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 17
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 45
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 433
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 15
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 218
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 201
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 39
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 64
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 71
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 7
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 14
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 122
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 130
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 16
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 8
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 404
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 834
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 9
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Sanat eserleri, kolleksiyon eşyası ve antikalar.",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 44
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 194
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 554
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 8
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 96
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 125
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 78
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 355
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 43
  },
  {
    "date": "2022-04",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2022-05",
    "count": 3674
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 65
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 83
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 189
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 4
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 64
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 194
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Canlı ağaçlar ve diğer bitkiler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 33
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 7
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 716
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 772
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 16
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 31
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 32
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Emdirilmiş, sıvanmış, vb. dokumaya elverişli mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 60
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 20
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 216
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 30
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 263
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 183
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 4
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 4
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Kurşun ve kurşundan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 215
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 15
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 8
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 62
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Nikel ve nikelden eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 22
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 64
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 37
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 42
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 878
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 632
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 11
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 222
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 416
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 1
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 111
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 77
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 47
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 225
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 56
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2022-05",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-06",
    "count": 3556
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 150
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 23
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 146
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 38
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 132
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 15
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 25
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 643
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 278
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 10
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 20
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 48
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 140
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 198
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Ham postlar, deriler (kürkler hariç) ve köseleler",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 92
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 594
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 131
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 6
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 9
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 5
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 7
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 111
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 14
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 9
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 57
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 175
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 31
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 195
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 2
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Örülmemiş giyim eşyası ve aksesuarı ",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 3
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1307
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 804
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 20
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 14
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 254
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 561
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 7
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 10
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 83
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 52
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 276
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 41
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Yenilen çeşitli gıda müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 1
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 18
  },
  {
    "date": "2022-06",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 13
  },
  {
    "date": "2022-07",
    "count": 3140
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Adi metallerden aletler",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 2
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 4
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 19
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 40
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 197
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Ayakkabılar, getrler, tozluklar ve benzeri eşya; bunların aksamı.",
    "GOODS_GROUP_KEY": 3,
    "GROUP_NAME": "Ayakkabılar, Başlıklar, Şemsiyeler vb.",
    "count": 3
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 56
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 39
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 17
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 397
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 297
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Demiryolu ve benzeri hatlara ait taşıtlar ve malzemeler",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 12
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 5
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 54
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 12
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 30
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 128
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 125
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 29
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 420
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "İpek.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 82
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 8
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 4
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 2
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 27
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 9
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 50
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 30
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 139
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 170
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Optik alet ve cihazlar",
    "GOODS_GROUP_KEY": 16,
    "GROUP_NAME": "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar",
    "count": 2
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 144
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Örme eşya.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Özel Amaçlı Gümrük Tarife İstatistik Pozisyonları",
    "GOODS_GROUP_KEY": 18,
    "GROUP_NAME": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1413
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 628
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 37
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 4
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 146
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 364
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 32
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 92
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 19
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Tütün ve tütün yerine geçen işlenmiş maddeler",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 53
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 5
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 193
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 12
  },
  {
    "date": "2022-07",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 147
  },
  {
    "date": "2022-08",
    "count": 2345
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Adi metallerden çeşitli eşya.",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 8
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 56
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Albüminoid maddeler; değişikliğe uğramış nişasta esaslı ürünler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 42
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 190
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Bakır ve bakırdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Balıklar vb. diğer omurgasız hayvanlar.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 2
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 160
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 34
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Debagatte ve boyacılıkta kullanılan hülasalar; ",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 2
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 78
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 591
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 591
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Deri eşya",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 8
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Diğer adi metaller; sermetler; bunlardan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 20
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Dokumaya elverişli maddelerden diğer hazır eşya",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 4
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Eczacılık ürünleri",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 24
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Etler ve yenilen sakatat.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 15
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 70
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Gübreler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 24
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 199
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 61
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 441
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Hububat.",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Kağıt ve karton",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 85
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 26
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Kakao ve kakao müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 9
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Kürkler ve taklit kürkler; bunların mamulleri",
    "GOODS_GROUP_KEY": 8,
    "GROUP_NAME": "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya",
    "count": 12
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Meşrubat, alkollü içkiler ve sirke",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 6
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 93
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 7
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 10
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 19
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 173
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 164
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 165
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Oyuncaklar, oyun ve spor malzemeleri",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Örme giyim eşyası ve aksesuarı.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1213
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 924
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 28
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 10
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 260
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 587
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Seramik mamulleri",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 109
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Süt ürünleri.",
    "GOODS_GROUP_KEY": 5,
    "GROUP_NAME": "Canlı Hayvanlar ve Hayvansal Ürünler",
    "count": 6
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 297
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 208
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Tuz; kükürt; topraklar ve taşlar; alçılar, kireçler ve çimento.",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 19
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Uçucu yağlar ve rezinoitler",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 1
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 151
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Yağlı tohum ve meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 2
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 12
  },
  {
    "date": "2022-08",
    "GOODS_NAME": "Yenilen sebzeler",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 11
  },
  {
    "date": "2022-09",
    "count": 2853
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Ağaç ve ahşap eşya; odun kömürü.",
    "GOODS_GROUP_KEY": 2,
    "GROUP_NAME": "Ağaç ve Ahşap Eşya",
    "count": 1
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Aluminyum ve aluminyumdan eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 10
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Anorganik kimyasallar",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 37
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Cam ve cam eşya ",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 6
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Çeşitli mamul eşya.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 32
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Değirmencilik ürünleri",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 20
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Demir ve çelik",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 191
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Demir veya çelikten eşya",
    "GOODS_GROUP_KEY": 1,
    "GROUP_NAME": "Adi Metaller ve Adi Metallerden Eşya",
    "count": 75
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Elektrikli makina ve cihazlar ve bunların aksam ve parçaları",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 16
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Gıda sanayiinin kalıntı ve döküntüleri; (yemler)",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Halı",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 62
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Hayvansal ve bitkisel yağlar ",
    "GOODS_GROUP_KEY": 9,
    "GROUP_NAME": "Hayvansal ve bitkisel katı ve sıvı yağlar ",
    "count": 16
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Hububat, un, nişasta veya süt müstahzarları",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 80
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Kahve, çay, paraguay çayı ve baharat. ",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Kauçuk ve kauçuktan eşya",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 1
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Metal cevherleri, cüruf ve kül ",
    "GOODS_GROUP_KEY": 12,
    "GROUP_NAME": "Mineral Maddeler",
    "count": 38
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Mobilyalar, tıpta veya cerrahide kullanılan mobilyalar vb.",
    "GOODS_GROUP_KEY": 13,
    "GROUP_NAME": "Muhtelif Mamul Eşya",
    "count": 7
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Motorlu kara taşıtları, traktörler, bisikletler vb.",
    "GOODS_GROUP_KEY": 14,
    "GROUP_NAME": "Nakil Vasıtaları",
    "count": 3
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Muhtelif kimyasal maddeler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 7
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Nükleer reaktörler, kazanlar, makinalar, mekanik cihazlar ve aletler",
    "GOODS_GROUP_KEY": 11,
    "GROUP_NAME": "Makinalar ve Mekanik Cihazlar",
    "count": 5
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Odun veya diğer lifli selülozik maddelerin hamurları",
    "GOODS_GROUP_KEY": 15,
    "GROUP_NAME": "Odun ve Geri Kazanılmış Kağıt veya Karton vb.",
    "count": 5
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Organik kimyasal ürünler.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 30
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Özel dokunmuş mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 1
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Pamuk.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 174
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Plastikler ve mamulleri ",
    "GOODS_GROUP_KEY": 17,
    "GROUP_NAME": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
    "count": 94
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Sabunlar, yüzey-aktif organik maddeler vb.",
    "GOODS_GROUP_KEY": 10,
    "GROUP_NAME": "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri",
    "count": 8
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Sebzeler, meyvalar vb. elde edilen müstahzarlar",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 3
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Sentetik ve suni devamsız lifler.",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 6
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Sentetik ve suni filamentler",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 102
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Şeker ve şeker mamulleri.",
    "GOODS_GROUP_KEY": 7,
    "GROUP_NAME": "Gıda Sanayii Müstahzarları",
    "count": 11
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Taş, alçı, çimento, amyant, mika veya benzeri maddelerden eşya",
    "GOODS_GROUP_KEY": 20,
    "GROUP_NAME": "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya",
    "count": 14
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Vatka, keçe ve dokunmamış mensucat",
    "GOODS_GROUP_KEY": 6,
    "GROUP_NAME": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya",
    "count": 42
  },
  {
    "date": "2022-09",
    "GOODS_NAME": "Yenilen meyvalar",
    "GOODS_GROUP_KEY": 4,
    "GROUP_NAME": "Bitkisel Ürünler",
    "count": 1
  }
];

export default goods;