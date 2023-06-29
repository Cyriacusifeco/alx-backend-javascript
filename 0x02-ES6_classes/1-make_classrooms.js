import ClassRoom from './0-classroom';

// Function to initialize and return an array of ClassRoom objects with specified sizes
export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];

  // Loop through the sizes array
  for (const size of sizes) {
    // Create a new ClassRoom object with the current size
    const room = new ClassRoom(size);
    // Add the room to the rooms array
    rooms.push(room);
  }

  // Return the array of ClassRoom objects
  return rooms;
}
