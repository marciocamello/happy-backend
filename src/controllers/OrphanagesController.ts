import {Request, Response} from 'express';
import {DeleteResult, getRepository} from 'typeorm'
import Orphanage from '../models/Orphanage';
import OrphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response){
        
        const orphanageRepository = getRepository(Orphanage); 
        const orphanages = await orphanageRepository.find({
            relations: ['images']
        });

        return res.json(OrphanageView.renderMany(orphanages));
    },
    
    async show(req: Request, res: Response){
        
        const orphanageRepository = getRepository(Orphanage); 
        const {
            id
        } = req.params;
        const orphanage = await orphanageRepository.findOneOrFail(id,{
            relations: ['images']
        });

        return res.json(OrphanageView.render(orphanage));
    },
    
    async update(req: Request, res: Response){
        
        const orphanageRepository = getRepository(Orphanage); 
        const {
            id
        } = req.params;
        const orphanage = await orphanageRepository.findOneOrFail(id,{
            relations: ['images']
        });

        return res.json(OrphanageView.render(orphanage));
    },
    
    async delete(req: Request, res: Response){
        
        const orphanageRepository = getRepository(Orphanage); 
        const {
            id
        } = req.params;
        await orphanageRepository.delete(id);

        return res.json({
            message: 'Orphanage deleted with success'
        });
    },

    async create(req: Request, res: Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;
    
        const orphanageRepository = getRepository(Orphanage); 

        const requestImages = req.files as Express.Multer.File[];

        const images = requestImages.map(image  => {
            return {
                path: image.filename
            }
        });

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends==='true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(),
                    info: Yup.string().required(),
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false
        });
    
        const orphanage = orphanageRepository.create(data);
    
        await orphanageRepository.save(orphanage);
    
        return res.status(201).json(orphanage)
    }
}