export default function guardrail(mathFunction) {
  let queue = [];

  try {
    const math = mathFunction();
    queue = [math, 'Guardrail was processed'];
  } catch (error) {
    queue = [error.toString(), 'Guardrail was processed'];
  }

  return queue;
}
