// app/api/association/route.ts
import { NextResponse } from 'next/server';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

export async function GET() {
  // Bu endpoint sadece Neynar'ın kimlik doğrulaması için var
  // ve manifest dosyasında belirtilen özel bir token'ı döndürür.
  // Bu örnekte, basit bir onay mesajı döndürüyoruz.
  // Gerçek bir uygulamada, Neynar'ın sağladığı bir token'ı burada
  // doğrular ve döndürürsün, ama başlangıç için bu yeterli.
  
  // TODO: Neynar belgelerinden tam "Account Association" akışını uygula
  // Şimdilik, sadece Neynar'ın bir yanıt aldığını görmesi yeterli.
  return NextResponse.json({
    "status": "ok",
    "message": "Association endpoint is active"
  }, { status: 200 });
}
