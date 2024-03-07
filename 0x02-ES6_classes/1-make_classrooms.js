import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const Class_one = new ClassRoom(19);
  const Class_two = new ClassRoom(20);
  const Class_three = new ClassRoom(34);

  return [Class_one, Class_two, Class_three];
}
