<template>
  <q-page class="q-pa-sm">
    <q-card class="my-card" v-ripple @click="dialog_1 = true">
      <q-img
        src="../statics/sanitize.jpg"
        basic
      />
      <q-card-section>
        <div class="text-h6">Do's & Dont's</div>
        <div class="text-subtitle2">Check out the list of do's and dont's</div>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="dialog_1"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <div class="text-h6">Do's & Dont's</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pt-none">
          <div class="text-bold text-h6">Do's</div>
          <ul>
            <li>Self-isolate and stay at home for seven days if you develop symptoms: a new continuous cough and/or high temperature. A high temperature means you feel hot to touch on your chest or back; a new, continuous cough means coughing a lot for more than an hour or three or more coughing episodes in 24 hours.</li>
            <li>Stay at home for 14 days if you live in a household where someone has the symptoms of coronavirus. This longer period is because it can take 14 days for symptoms to appear and you will not know initially whether or not you are infected. If you then develop symptoms, stay at home for a further seven days even if that means you stay at home in total for longer than 14 days of isolation.</li>
            <li>Wash your hands frequently with soap and water for at least 20 seconds and particularly before you touch food or if you have been out in public areas, have been coughing, sneezing or blowing your nose.</li>
            <li>Always cough and sneeze into a tissue, then throw it away and wash your hands. Use your arm if you don’t have a tissue to hand.</li>
            <li>If you develop symptoms and live with someone who is vulnerable – over 70, who has a long-term health condition, is pregnant or has a weakened immune system – arrange for them to stay with friends and family for 14 days. If that is not possible, keep two or three metres away from them, do not share a bathroom and do not use shared spaces (ie kitchens) at the same time.</li>
            <li>Clean commonly used surfaces at home such as door handles, kettles and phones.</li>
            <li>Drink plenty of liquids to stay well hydrated.</li>
            <li>Take paracetamol to ease any symptoms. There is no strong evidence that ibuprofen can worsen symptoms, so if you are already taking ibuprofen or another anti-inflammatory, then do not stop taking it without consulting a doctor.</li>
            <li>Work from home where possible. Keep in touch with friends and family using remote technology: ie phone, internet and social media.</li>
            <li>Take light exercise to keep fit.</li>
            <li>Respect the need for social distancing: if you go out, stay at least two metres away from others to prevent transmission of the virus. Avoid non-essential use of public transport where possible. Stay away from gatherings in public spaces. Cinemas, theatres, pubs, bars, restaurants and clubs are now all required to close.</li>
            <li>Ask family, friends and neighbours to support you if you are reducing social contact and need help obtaining food and medicine. Use online services.</li>
          </ul>
          <div class="text-bold text-h6">Don’ts</div>
          <ul>
            <li>Do not have contact with anyone who has symptoms.</li>
            <li>Avoid touching your eyes, nose or mouth with your hand.</li>
            <li>Do not visit your GP’s surgery, a pharmacy or hospital if you still have coronavirus symptoms after seven days. Instead get advice from NHS 111 online or call 111. If it is an emergency call 999 and say you may have coronavirus.</li>
            <li>Do not share towels or a bed with those deemed vulnerable if you have the symptoms and live in the same home.</li>
            <li>Do not visit your mother on Mother’s Day if she is older or vulnerable. Call her instead.</li>
            <li>Do not go on holiday overseas. The Foreign Office advises against all non-essential travel abroad. Other countries may restrict travel without notice.</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-card class="my-card" @click="dialog_2 = true" v-ripple>
      <q-img
        src="../statics/covid19.jpg"
        basic
      />
      <q-card-section>
        <div class="text-h6">Facts & Myths</div>
        <div class="text-subtitle2">A collection of myths and facts about COVID-19</div>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="dialog_2"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <div class="text-h6">Facts & Myths</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pt-none">
          <h6>Cold weather and snow kill the new coronavirus</h6>
          <p>There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.</p>
          <h6>Taking a hot bath prevent the new coronavirus disease</h6>
          <p>Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that coud occur by then touching your eyes, mouth, and nose.</p>
          <h6>The new coronavirus can be transmitted through goods manufactured in China or any country reporting COVID-19 cases.</h6>
          <p>Even though the new coronavirus can stay on surfaces for a few hours or up to several days (depending on the type of surface), it is very unlikely that the virus will persist on a surface after being moved, travelled, and exposed to different conditions and temperatures. If you think a surface may be contaminated, use a disinfectant to clean it. After touching it, clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
          <h6>The new coronavirus can be transmitted through mosquito bites</h6>
          <p>To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.</p>
          <h6>Hand dryers effective in killing the new coronavirus</h6>
          <p>Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.</p>
          <h6>Can an ultraviolet disinfection lamp kill the new coronavirus?</h6>
          <p>UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.</p>
          <h6>How effective are thermal scanners in detecting people infected with the new coronavirus?</h6>
          <p>Thermal scanners are effective in detecting people who have developed a fever (i.e. have a higher than normal body temperature) because of infection with the new coronavirus. However, they cannot detect people who are infected but are not yet sick with fever. This is because it takes between 2 and 10 days before people who are infected become sick and develop a fever.</p>
          <h6>Can spraying alcohol or chlorine all over your body kill the new coronavirus?</h6>
          <p>No. Spraying alcohol or chlorine all over your body will not kill viruses that have already entered your body. Spraying such substances can be harmful to clothes or mucous membranes (i.e. eyes, mouth). Be aware that both alcohol and chlorine can be useful to disinfect surfaces, but they need to be used under appropriate recommendations.</p>
          <h6>Can pets at home spread the new coronavirus (2019-nCoV)?</h6>
          <p>At present, there is no evidence that companion animals/pets such as dogs or cats can be infected with the new coronavirus. However, it is always a good idea to wash your hands with soap and water after contact with pets. This protects you against various common bacteria such as E.coli and Salmonella that can pass between pets and humans.</p>
          <h6>Do vaccines against pneumonia protect you against the new coronavirus?</h6>
          <p>No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus. The virus is so new and different that it needs its own vaccine. Researchers are trying to develop a vaccine against 2019-nCoV, and WHO is supporting their efforts. Although these vaccines are not effective against 2019-nCoV, vaccination against respiratory illnesses is highly recommended to protect your health.</p>
          <h6>Can regularly rinsing your nose with saline help prevent infection with the new coronavirus?</h6>
          <p>No. There is no evidence that regularly rinsing the nose with saline has protected people from infection with the new coronavirus. There is some limited evidence that regularly rinsing nose with saline can help people recover more quickly from the common cold. However, regularly rinsing the nose has not been shown to prevent respiratory infections.</p>
          <h6>Can eating garlic help prevent infection with the new coronavirus?</h6>
          <p>Garlic is a healthy food that may have some antimicrobial properties. However, there is no evidence from the current outbreak that eating garlic has protected people from the new coronavirus.</p>
          <h6>Does the new coronavirus affect older people, or are younger people also susceptible?</h6>
          <p>People of all ages can be infected by the new coronavirus (2019-nCoV). Older people, and people with pre-existing medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming severely ill with the virus. WHO advises people of all ages to take steps to protect themselves from the virus, for example by following good hand hygiene and good respiratory hygiene.</p>
          <h6>Are antibiotics effective in preventing and treating the new coronavirus?</h6>
          <p>No, antibiotics do not work against viruses, only bacteria. The new coronavirus (2019-nCoV) is a virus and, therefore, antibiotics should not be used as a means of prevention or treatment. However, if you are hospitalized for the 2019-nCoV, you may receive antibiotics because bacterial co-infection is possible.</p>
          <h6>Are there any specific medicines to prevent or treat the new coronavirus?</h6>
          <p>To date, there is no specific medicine recommended to prevent or treat the new coronavirus (2019-nCoV). However, those infected with the virus should receive appropriate care to relieve and treat symptoms, and those with severe illness should receive optimized supportive care. Some specific treatments are under investigation, and will be tested through clinical trials. WHO is helping to accelerate research and development efforts with a range or partners.</p>
          <p>Source: WHO</p>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-card class="my-card" @click="dialog_3 = true" v-ripple>
      <q-img
        src="../statics/facts.jpg"
        basic
      />
      <q-card-section>
        <div class="text-h6">Useful Links</div>
        <div class="text-subtitle2">A collection of useful links</div>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="dialog_3"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <div class="text-h6">Useful Links</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'Reference',
  data () {
    return {
      dialog_1: false,
      dialog_2: false,
      dialog_3: false
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card {
  margin-bottom: 20px;
}
</style>
