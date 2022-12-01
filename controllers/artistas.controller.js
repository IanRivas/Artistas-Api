import Artista from '../models/Artista.js'

export async function crearArtista (req, res) {
    try {
        const artista = new Artista(req.body)
        await artista.save()
        res.json({ status: 'Artista guardado' })
    } catch (error) {
        res.status(500).json({ 'error': 'Error Inesperado' })
    }
}

export async function verArtistas (req, res){
    try {
        const artistas = await Artista.find()
        res.json(artistas)
    } catch(err) {
        res.status(500).json({ 'error': 'Error Inesperado' })
    }
}

export async function verArtista (req, res){
    try {
        const artista = await Artista.findById(req.params.id)
        if(!artista) {
            throw new Error('Artista no encontrado')
        }
        res.json(artista)
    } catch(err) {
        res.status(500).json({ 'error': 'Error Inesperado' })
    }
}

export async function editarArtista (req, res){
    try {
        const artista = await Artista.findByIdAndUpdate(req.query.id, req.body, { new: true })
        res.status(200).json({mensaje: 'Artista actualizado', artista})
    } catch(err) {
        res.status(500).json({ 'error': 'Error Inesperado' })
    }
}

export async function eliminarArtista (req, res){
    try {
        await Artista.findByIdAndDelete(req.query.id)
        res.status(200).json({mensaje: 'Artista eliminado'})
    } catch(err) {
        res.status(500).json({ 'error': 'Error Inesperado' })
    }
}