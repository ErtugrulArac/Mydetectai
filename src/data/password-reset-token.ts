import { prisma } from "@/utils/connect";

export const getPasswordResetTokenByToken = async (token: string) => {
    try{
        const passwordToken = await prisma.passwordResetToken.findUnique({
            where: {
                token
            }
        });
        
        return passwordToken;
    }catch{
        return null;
    }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
    try{
        const passwordToken = await prisma.passwordResetToken.findFirst({
            where: {
                email
            }
        });

        return passwordToken;
    }catch{
        return null;
    }
};