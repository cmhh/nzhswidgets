<script setup>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import CircleTab from './components/CircleTab.vue'
</script>
  
<template>
  <BarChart
    :series='[{name: "Jun-20", data: [7.1,17.9,36.3,34.7,4]},
      {name: "Sep-20", data: [5.8,16.5,36.3,37.4,3.4]},
      {name: "Dec-20", data: [4.9,13.2,36.6,42.4,2.8]}
    ]'
    :categories='["almost certain / a high chance", "a medium chance", "a low chance", "almost no chance", "don&#39;t know"]'
  />

  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>

  <BarChart
    title="Proportion of employed people by self-assessed job security, June 2020&ndash;December 2020 quarters" 
    :series='[{name: "Jun-20", data: [7.1,17.9,36.3,34.7,4]},
      {name: "Sep-20", data: [5.8,16.5,36.3,37.4,3.4]},
      {name: "Dec-20", data: [4.9,13.2,36.6,42.4,2.8]}
    ]'
    :categories='["almost certain / a high chance", "a medium chance", "a low chance", "almost no chance", "don&#39;t know"]'
    xlab="Self-assessed likelihood of losing job or business in next 12 months"
    ylab="Percent"
  /> 

  <p>Pig shank meatloaf pork chop jerky flank kielbasa, spare ribs ball tip bresaola shoulder. Pancetta pastrami alcatra cupim ground round. Pork sirloin doner pig. Shankle corned beef ball tip capicola, pork loin turkey landjaeger biltong cupim. Doner tenderloin drumstick leberkas sausage ground round cupim t-bone andouille meatball. Chicken short ribs cow leberkas filet mignon rump pork loin shank shankle sirloin tri-tip tail pig bacon. Shankle jerky short ribs tongue rump pig strip steak beef shank leberkas salami.</p>

   <BarChart
    title="Proportion of employed people by self-assessed job security, June 2020&ndash;December 2020 quarters" 
    :series='[{name: "Jun-20", data: [7.1,17.9,36.3,34.7,4], range: [[6.6,7.5],[17.3,18.6],[35.5,37.1],[33.8,35.5],[3.6,4.4]]},
      {name: "Sep-20", data: [5.8,16.5,36.3,37.4,3.4], range: [[5.5,6.2],[15.7,17.2],[35.9,37.8],[36.4,38.5],[3,3.7]]},
      {name: "Dec-20", data: [4.9,13.2,36.6,42.4,2.8], range: [[4.5,5.3],[12.6,13.8],[35.8,37.5],[41.5,43.4],[2.5,3.2]]}
    ]'
    :categories='["almost certain / a high chance", "a medium chance", "a low chance", "almost no chance", "don&#39;t know"]'
    xlab="Self-assessed likelihood of losing job or business in next 12 months"
    ylab="Percent"
  />
  
  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>
  
  <LineChart
    title="blah"
    :x='[
      "Dec-05","Mar-06","Jun-06"
    ]'
    :y="[
      {name: 'A', data:[3,2,1], range:[[2.5, 3.5], [1.5, 2.5], [0.5, 1.5]]},
      {name: 'B', data:[1,3,2], range:[[0.5, 1.5], [2.5, 3.5], [1.5, 2.5]]}
    ]"
  />

  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>

  <CircleTab 
    :data="[
      {outcome: 'Foo', values: {A: 1.0, B: 0.5, C: 0.1}},
      {outcome: 'Bar', values: {A: 0.4, B: 0.3, C: 0.1}},
      {outcome: 'Baz', values: {A: 0.2, B: 0.8, C: 0.2}}
    ]"
    :maxVal="1"
    :strokeWidth="0"
  />

  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>

  <p>Pig shank meatloaf pork chop jerky flank kielbasa, spare ribs ball tip bresaola shoulder. Pancetta pastrami alcatra cupim ground round. Pork sirloin doner pig. Shankle corned beef ball tip capicola, pork loin turkey landjaeger biltong cupim. Doner tenderloin drumstick leberkas sausage ground round cupim t-bone andouille meatball. Chicken short ribs cow leberkas filet mignon rump pork loin shank shankle sirloin tri-tip tail pig bacon. Shankle jerky short ribs tongue rump pig strip steak beef shank leberkas salami.</p>
  
  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>
  
  <p>Bacon ipsum dolor amet buffalo ham leberkas pork loin filet mignon jowl jerky salami turducken ribeye boudin kevin pastrami. Ground round jowl strip steak chicken pork belly, turducken beef ribs tri-tip boudin cupim. Pancetta tenderloin drumstick, alcatra short ribs pork shankle meatloaf pork chop venison salami brisket fatback bresaola. Buffalo pork loin ball tip flank ham, alcatra filet mignon brisket ribeye. Turkey fatback drumstick sausage, ball tip chicken meatball capicola strip steak prosciutto flank alcatra beef ribs sirloin. T-bone shoulder sirloin shank leberkas short ribs. Bresaola leberkas corned beef meatball.</p>
</template>

<style scoped>
p {
  min-width: 600px;
}
</style>
