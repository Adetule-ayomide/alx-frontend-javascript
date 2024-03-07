import ClassRoom from './0-classroom';

const initializeRooms = function () {
  const class_one = new ClassRoom(19);
  const class_two = new ClassRoom(20);
  const class_three = new ClassRoom(34);

  return [class_one, class_two, class_three];
}
