export function update(inputs: any, name: string, newValue: string) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};

  for (var name in inputs) {
    data[name] = inputs[name].value;
  }

  return data;
}
