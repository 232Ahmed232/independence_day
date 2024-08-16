import React, { useState } from 'react';
import Image from 'next/image';
import "./tab.css"
function Landmarks() {
  const [activeTab, setActiveTab] = useState('K2');

  const handleTabClick = (target:any) => {
    setActiveTab(target);
  };

  const tabs = [
    { id: 'K2', label: 'K2', content: `K2, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres (29,032 ft). It lies in the Karakoram range, partially in the Gilgit-Baltistan region of Pakistan-administered Kashmir and partially in the China-administered Trans-Karakoram Tract in the Taxkorgan Tajik Autonomous County of Xinjiang.

    K2 became known as the Savage Mountain after George Bell—a climber on the 1953 American expedition—said, "It's a savage mountain that tries to kill you." Of the five highest mountains in the world, K2 has long been the deadliest: prior to 2021, approximately one person had died on the mountain for every four who reached the summit. After an increase in successful attempts, as of August 2023, an estimated 800 people have summited K2, with 96 deaths during attempted climbs.
    
    Also occasionally known as Mount Godwin-Austen, other nicknames for K2 are The King of Mountains and The Mountaineers' Mountain, as well as The Mountain of Mountains after prominent Italian climber Reinhold Messner titled his book about K2 the same. Although the summit of Everest is at a higher altitude, K2 is a more difficult and dangerous climb, due in part to its more northern location, where inclement weather is more common. The summit was reached for the first time by the Italian climbers Lino Lacedelli and Achille Compagnoni, on the 1954 Italian expedition led by Ardito Desio.` , image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723729928/Chogori_tv5d5n.jpg', alt: ' K-2 ' },

    { id: 'Badshahi Mosque', label: 'Badshahi Mosque', content: `The Badshahi Mosque (Punjabi: بادشاہی مسیت, romanized: Bādshā'ī Masīt; Urdu: بادشاہی مسجد, romanized: Bādshāhī Masjid) is a Mughal-era imperial mosque located in Lahore, Punjab, Pakistan. It was constructed between 1671 and 1673 during the rule of Aurangzeb, opposite of the Lahore Fort on the northern outskirts of the historic Walled City. It is widely considered to be one of the most iconic landmarks of the Punjab`, image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723739346/TMcC0XShYzoIhzNmFLsSLEKyLntR3geiRSQDFWRi_uv6kfq.jpg', alt: 'Badshahi Mosque' },

    { id: 'Pakistan Monument', label: 'Pakistan Monument', content: `The Pakistan Monument (Urdu: یادگارِ پاکستان) is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. It is dedicated to the people of Pakistan who sacrificed their "today" for a better "tomorrow".
    The four large petals represent each of the four main cultures of Pakistan, the Punjabi, the Baloch, the Sindhi and the Pakhtun. The three smaller petals represent: the minorities, Azad Kashmir and Gilgit-Baltistan. Its elevation makes the monument visible from across the Islamabad-Rawalpindi metropolitan area and is a popular tourist destination.`, image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723739418/Blue_Hour_at_Pakistan_Monument_orbsne.jpg', alt: 'Pakistan Monument' },

    { id: 'Lahore Fort', label: 'Lahore Fort', content: `The Lahore Fort (Punjabi, Urdu: شاہی قلعہ, romanized: Shāhī Qilā, lit.'Royal Fort') is a citadel in the city of Lahore in Punjab, Pakistan. The fortress is located at the northern end of the Walled City of Lahore and spreads over an area greater than 20 hectares (49 acres). It contains 21 notable monuments, some of which date to the era of Emperor Akbar. The Lahore Fort is notable for having been almost entirely rebuilt in the 17th century, when the Mughal Empire was at the height of its splendor and opulence.`, image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723745350/1200px-Lahore_Fort_view_from_Baradari_qwlcgw.jpg', alt: 'Lahore Fort' },

    { id: 'Eid al-Fitr', label: 'Eid al-Fitr', content: `Eid al-Fitr (/ˌiːd əl ˈfɪtər, -trə/ EED əl FIT-ər, -⁠rə; Arabic: عيد الفطر, romanized: ʿĪd al-Fiṭr, lit. 'Feast of Breaking the Fast', IPA: [ʕiːd al ˈfɪtˤr]) is the earlier of the two official holidays celebrated within Islam (the other being Eid al-Adha). Eid al-Fitr is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-dusk fasting of Ramadan. Eid al-Fitr falls on the first day of Shawwal in the Islamic calendar; this does not always fall on the same Gregorian day, as the start of any lunar Hijri month varies based on when the new moon is sighted by local religious authorities. The holiday is known under various other names in different languages and countries around the world. The day is also called Eid I or "Lesser Eid" (Arabic: العيد الصغير, romanized: al-ʿĪd al-Ṣaghīr), or simply Eid.`, image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723745596/Add-a-heading-2024-02-15T122450.599_ih6u0p.jpg', alt: 'Eid al-Fitr' },

    { id: 'Eid al-Adha', label: 'Eid al-Adha', content: `Eid al-Adha (Arabic: عيد الأضحى, romanized: ʿĪd al-ʾAḍḥā, lit. 'Feast of Sacrifice') is the second of the two main holidays in Islam alongside Eid al-Fitr. It falls on the 10th of Dhu al-Hijja, the twelfth and final month of the Islamic calendar. Celebrations and observances are generally carried forward to the three following days, known as the Tashreeq days.

    Eid al-Adha is also sometimes called Eid II or "Greater Eid" (Arabic: العيد الكبير, romanized: al-ʿĪd al-Kabīr). As with Eid al-Fitr, the Eid prayer is performed on the morning of Eid al-Adha, after which udhiyah, or the ritual sacrifice of sheep, may be performed. In Islamic tradition, it honours the willingness of Abraham to sacrifice his son as an act of obedience to God's command. Depending on the narrative, either Ishmael or Isaac are referred to with the honorific title "Sacrifice of God". Pilgrims performing the Hajj typically perform the tawaf and saee of Hajj on Eid al-Adha, along with the ritual stoning of the devil on the Eid day and the following days.`, image: 'https://res.cloudinary.com/dpviaxj2y/image/upload/v1723745699/496156_011906_fullstory_qc3lfs.webp', alt: 'Eid al-Adha' },

  ];

  return (
    <div>
      <h1 className='text-center my-12 text-green-800 font-bold text-xl lg:text-3xl'>Landmarks & Festivals</h1>
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tab-content-container">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
            >
              <div className="content">
                <p>{tab.content}</p>
                <Image src={tab.image} alt={tab.alt} width={300} height={200} className="dummy-image" />
                   </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landmarks;
