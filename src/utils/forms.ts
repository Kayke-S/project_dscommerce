export function update(inputs: any, name: string, newValue: string) {
  return {...inputs, [name]: {...inputs[name], value: newValue,},};
}
