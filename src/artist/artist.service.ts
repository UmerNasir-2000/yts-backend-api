import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistService {

    constructor(private readonly prismaService: PrismaService) { }

    async fetchLeadingArtist() { 
        return await this.prismaService.artist.findMany()
    }
}
