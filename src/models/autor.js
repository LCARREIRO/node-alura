import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  nacionalidade: { type: String }
}, { versionKey: false });

const autor = mongoose.model('autores', autorSchema);

// Não utilizar export default quando importar um objeto complexto { }, apenas quando for um item
export { autor, autorSchema };