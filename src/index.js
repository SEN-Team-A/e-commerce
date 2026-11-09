// Placeholder entry point. Real features (catalogue, cart, checkout...) arrive via approved change requests.
function health() {
  return { status: 'ok', service: 'e-commerce' };
}

module.exports = { health };
