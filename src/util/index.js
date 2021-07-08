export function parseChain(chain) {
  if (!chain) return '';

  const _chain = chain.toLowerCase();
  const map = {
    eth: 'ethereum',
    ether: 'ethereum',
    tron: 'tron',
    trx: 'tron',
    crab: 'crab',
  };
  if (!map[_chain]) return chain;
  return map[_chain];
}
