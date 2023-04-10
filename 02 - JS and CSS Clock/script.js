function calCulate() {
  let hours = new Date().getHours();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  hours = hours;
  let miniutes = new Date().getMinutes();
  let seconds = new Date().getUTCSeconds();

  const hoursHandRotationAmount = (360 / 12) * hours + (miniutes / 60) * 30;
  const minHandRotationAmount = (miniutes / 60) * 360;
  const secHandRotationAmount = (360 / 60) * seconds;

  document.getElementById(
    "hour-hand"
  ).style.rotate = `${hoursHandRotationAmount}deg`;

  document.getElementById(
    "min-hand"
  ).style.rotate = `${minHandRotationAmount}deg`;

  document.getElementById(
    "second-hand"
  ).style.rotate = `${secHandRotationAmount}deg`;
}

function goCalculate() {
  calCulate();
  setTimeout(goCalculate, 1000);
}

goCalculate();
