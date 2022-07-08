let count = 0;

const increment = () => {
  count += 1;
  const num = document.getElementById('counterNum');
  num.textContent = count;
};

const decrement = () => {
  count -= 1;
  const num = document.getElementById('counterNum');
  num.textContent = count;
};
