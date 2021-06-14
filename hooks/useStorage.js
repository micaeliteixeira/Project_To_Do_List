const useStorage = (key) => {
  function addData(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getData() {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return (data || []);
    } catch (err) {
      console.error(err);
    }

    return [];
  }

  function addSingleData(data) {
    const oldValue = getData();

    let value;

    if (Array.isArray(oldValue)) {
      const newValue = oldValue.concat(data);
      value = JSON.stringify(newValue);
    }

    localStorage.setItem(key, value);
  }

  return { getData, addSingleData, addData };
};

export default useStorage;
