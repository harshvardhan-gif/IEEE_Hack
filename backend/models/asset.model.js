const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Type of asset (e.g., school, center, office)
  name: { type: String, required: true }, // Name of the asset
  location: { type: String, required: true }, // Location information (address)
  latitude: { type: Number, required: true }, // Latitude
  longitude: { type: Number, required: true }, // Longitude
  size: { type: Number }, // Size of the asset in square meters
  yearOfConstruction: { type: Number }, // Year the asset was constructed
  capacity: { type: Number }, // Maximum capacity of the asset
  rooms: { type: Number }, // Number of rooms in the asset
  labs: { type: Number }, // Number of labs in the asset
  maintenanceRequired: { type: Boolean, default: false }, // Is maintenance required?
  presentUse: { type: String }, // Current use of the asset
  actionHistory: [
    {
      timestamp: { type: Date, default: Date.now },
      actionType: { type: String, required: true },
      details: String,
      updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    },
  ]
}, { timestamps: true });

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;