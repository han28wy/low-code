const configMap = new Map();
configMap.set("button", {
  name: true,
  placeholder: true,
  color: true,
  options: false,
});
configMap.set("radio", {
  name: true,
  placeholder: false,
  color: false,
  options: true,
});

const getConfig = (val: string) => {
  return configMap.get(val);
};

export default getConfig;
