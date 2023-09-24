const mygroup = [
  { id: '19110122', name: 'Pham Quoc Thai' },
  { id: '20110397', name: 'Tran Anh Tai' },
  { id: '20110363', name: 'Trinh Van Dong' },
];

module.exports = {
  getMyGroup: () => mygroup,
  addItemToMyGroup: (item) => {
    if (!mygroup.some((existingItem) => existingItem.id === item.id)) {
      mygroup.push(item);
      return true;
    }
    return false;
  },
  findStudentById: (id) => mygroup.find((student) => student.id === id),
};
