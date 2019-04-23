const funcs = require('./partners.functions')
let feedback
test('create new partner', async () => {
  const partner = await funcs.createPartner()
  expect(partner.orgnaisationname).toBe('dummydata')
  partner = partner
})

test('get all partners', async () => {
  const partner = await funcs.getPartners()
  expect(Array.isArray(partner)).toBe(true)
})

test('get specific partner', async () => {
  const partner = await funcs.getPartners(Partner.id)
  expect(partner.id).toBe(Partner.id)
})

test('update specific partner', async () => {
  const partner = await funcs.updatePartner(Partner.id)
  expect(partner.event).toBe('dummydata')
})

test('delete specific Partner', async () => {
  const message = await funcs.deletePartner(Partner.id)
  expect(message).toBe('Partner was deleted successfully')
})
