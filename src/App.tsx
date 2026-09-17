const assetPathPrefix = "/assets";
const imgRectangle = `${assetPathPrefix}/c97f4.png`;
const imgRectangle1 = `${assetPathPrefix}/11667.png`;
const imgChevronLeft = `${assetPathPrefix}/ff5fc.svg`;
const imgGlobe = `${assetPathPrefix}/1881e.svg`;
const imgChevronDown = `${assetPathPrefix}/3b65e.svg`;
const imgChevronRight = `${assetPathPrefix}/8f954.svg`;
const imgClock = `${assetPathPrefix}/3791f.svg`;
const imgRadio = `${assetPathPrefix}/4f8d1.svg`;
const imgCheck = `${assetPathPrefix}/af8de.svg`;
const imgLine = `${assetPathPrefix}/cde81.svg`;
const imgLock = `${assetPathPrefix}/149e4.svg`;
const imgSpinnerBase = `${assetPathPrefix}/af7f5.svg`;
const imgShieldAlert = `${assetPathPrefix}/75fa5.svg`;
const imgAlertCircle = `${assetPathPrefix}/a7fa0.svg`;
const imgAlertTriangle = `${assetPathPrefix}/65131.svg`;

function Header() {
  return (
    <div className="bg-[#13201a] flex items-center justify-between px-10 lg:px-20 py-6 w-full">
      <div className="flex gap-2 items-center">
        <div className="relative shrink-0 size-4">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
        </div>
        <p className="font-['Geist:Medium'] font-medium leading-normal text-sm text-white whitespace-nowrap">
          Volver
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="relative shrink-0 size-6">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlobe} />
        </div>
        <p className="font-['Unbounded:Black'] font-black leading-normal text-xl text-white whitespace-nowrap">
          NATIVA TRIPS
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <a className="font-['Geist:Medium'] font-medium text-sm text-white whitespace-nowrap" href="https://example.com/help" target="_blank">
          <span className="underline decoration-solid cursor-pointer leading-normal">¿Necesitas ayuda?</span>
        </a>
        <div className="flex gap-1 items-center">
          <p className="font-['Geist:SemiBold'] font-semibold leading-normal text-[#dceb6b] text-sm whitespace-nowrap">ES</p>
          <div className="relative shrink-0 size-3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex gap-2 items-center py-3 w-full">
      <p className="font-['Geist:Medium'] font-medium leading-normal text-[#4a524e] text-[13px] whitespace-nowrap">1. Reserva</p>
      <div className="relative shrink-0 size-3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
      </div>
      <p className="font-['Geist:Bold'] font-bold leading-normal text-[#13201a] text-[13px] whitespace-nowrap">2. Pago seguro</p>
      <div className="relative shrink-0 size-3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
      </div>
      <p className="font-['Geist:Medium'] font-medium leading-normal text-[#4a524e] text-[13px] whitespace-nowrap">3. Confirmación</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <img alt="" className="block max-w-none size-full" src={imgLine} />
      </div>
    </div>
  );
}

function OrderSummaryCard({ tripImage }: { tripImage: string }) {
  return (
    <div className="bg-white drop-shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-6 items-start p-8 rounded-3xl w-full">
      <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">
        RESUMEN DE TU RESERVA
      </p>
      <div className="flex gap-4 items-center w-full">
        <div className="relative rounded-xl shrink-0 size-20">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-xl size-full" src={tripImage} />
        </div>
        <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
          <p className="font-['Unbounded:ExtraBold'] font-extrabold text-[#0b120e] text-base w-full leading-normal">
            Sendero Lagunas de Siecha
          </p>
          <p className="font-['Geist:Regular'] font-normal text-[#4a524e] text-[13px] w-full leading-normal">
            PNN Chingaza, Colombia
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-3 items-start text-sm w-full whitespace-nowrap leading-normal">
        <div className="flex items-start justify-between w-full">
          <p className="font-['Geist:Regular'] font-normal text-[#4a524e]">Fecha</p>
          <p className="font-['Geist:SemiBold'] font-semibold text-[#0b120e]">Sáb 14 Dic 2025</p>
        </div>
        <div className="flex items-start justify-between w-full">
          <p className="font-['Geist:Regular'] font-normal text-[#4a524e]">Grupo</p>
          <p className="font-['Geist:SemiBold'] font-semibold text-[#0b120e]">3 personas</p>
        </div>
        <div className="flex items-start justify-between w-full">
          <p className="font-['Geist:Regular'] font-normal text-[#4a524e]">Titular</p>
          <p className="font-['Geist:SemiBold'] font-semibold text-[#0b120e]">Juan Sebastián Mora</p>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-3 items-start w-full">
        <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#13201a] text-[11px] uppercase whitespace-nowrap">
          DETALLE DEL PAGO
        </p>
        <div className="flex font-['Geist:Regular'] font-normal items-start justify-between leading-normal text-sm w-full whitespace-nowrap">
          <p className="text-[#4a524e]">Entrada sendero (3 pers.)</p>
          <p className="text-[#0b120e]">$555.000 COP</p>
        </div>
        <div className="flex font-['Geist:Regular'] font-normal items-start justify-between leading-normal text-sm w-full whitespace-nowrap">
          <p className="text-[#4a524e]">Transporte Bogotá (3 pers.)</p>
          <p className="text-[#0b120e]">$135.000 COP</p>
        </div>
        <div className="flex font-['Geist:Regular'] font-normal items-start justify-between leading-normal text-sm w-full whitespace-nowrap">
          <p className="text-[#4a524e]">Almuerzo de campo (3 pers.)</p>
          <p className="text-[#0b120e]">$75.000 COP</p>
        </div>
        <Divider />
        <div className="flex items-start justify-between leading-normal text-sm w-full whitespace-nowrap">
          <p className="font-['Geist:Regular'] font-normal text-[#4a524e]">Subtotal</p>
          <p className="font-['Geist:SemiBold'] font-semibold text-[#0b120e]">$765.000 COP</p>
        </div>
        <div className="flex font-['Geist:Bold'] font-bold items-start justify-between leading-normal text-[#13201a] text-sm w-full whitespace-nowrap">
          <p>Anticipo requerido (50%)</p>
          <p>$382.500 COP</p>
        </div>
        <div className="bg-[#dceb6b] flex flex-col gap-1 items-start leading-normal p-4 rounded-xl text-[#13201a] w-full whitespace-nowrap">
          <p className="font-['Geist:Bold'] font-bold text-[12px] uppercase">TOTAL A PAGAR HOY</p>
          <p className="font-['Unbounded:Black'] font-black text-2xl">$382.500 COP</p>
        </div>
        <p className="font-['Geist:Regular'] font-normal leading-[1.4] text-[#4a524e] text-[12px]">
          * El saldo restante ($382.500) se paga el día del recorrido directamente al guía local.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen">

      {/* ── State 1: Checkout ── */}
      <div className="bg-[#13201a] flex items-center px-10 py-4 w-full">
        <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#dceb6b] text-lg uppercase whitespace-nowrap">
          Estado 1: Checkout (Selección de Pago + Resumen)
        </p>
      </div>
      <Header />
      <div className="flex flex-col gap-8 items-start pb-20 pt-10 px-10 lg:px-20 w-full">
        <Breadcrumbs />
        {/* Countdown banner */}
        <div className="bg-[#fff7ed] flex gap-3 items-center px-6 py-3 rounded-lg w-full">
          <div className="relative shrink-0 size-[18px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
          </div>
          <p className="font-['Geist:SemiBold'] font-semibold leading-normal text-[#9a3412] text-sm whitespace-nowrap">
            Tu cupo expira en 12:47
          </p>
          <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#9a3412] text-sm">
            — Completa tu reserva para asegurar las entradas y el transporte.
          </p>
        </div>
        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          {/* Left column */}
          <div className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full">
            {/* Payment gateway card */}
            <div className="bg-white drop-shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-6 items-start p-8 rounded-3xl w-full">
              <div className="flex flex-col gap-1 items-start w-full leading-normal">
                <p className="font-['Geist:Bold'] font-bold text-[#13201a] text-[12px] uppercase whitespace-nowrap">
                  MÉTODO DE PAGO
                </p>
                <p className="font-['Unbounded:Black'] font-black text-[#0b120e] text-[28px] w-full">
                  Selecciona tu pasarela
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start w-full">
                {/* PayU – selected */}
                <div className="bg-white border-2 border-[#13201a] flex gap-4 items-center p-5 rounded-xl w-full">
                  <div className="bg-[#f5f1e7] flex h-10 items-center justify-center rounded-[6px] shrink-0 w-16">
                    <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-sm whitespace-nowrap">PayU</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start leading-normal min-w-0">
                    <p className="font-['Geist:Bold'] font-bold text-[#0b120e] text-base whitespace-nowrap">PayU</p>
                    <p className="font-['Geist:Regular'] font-normal text-[#4a524e] text-[13px]">Tarjeta de crédito/débito, PSE, efectivo (Efecty, Su Red, Baloto)</p>
                  </div>
                  <div className="relative shrink-0 size-5">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                  </div>
                </div>
                {/* Wompi */}
                <div className="bg-white border border-[#e1dcd0] flex gap-4 items-center p-5 rounded-xl w-full">
                  <div className="bg-[#f5f1e7] flex h-10 items-center justify-center rounded-[6px] shrink-0 w-16">
                    <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-sm whitespace-nowrap">wompi</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start leading-normal min-w-0">
                    <p className="font-['Geist:Bold'] font-bold text-[#0b120e] text-base whitespace-nowrap">Wompi (Bancolombia)</p>
                    <p className="font-['Geist:Regular'] font-normal text-[#4a524e] text-[13px]">Tarjeta de crédito/débito, Nequi, Botón Bancolombia, Transfiya</p>
                  </div>
                  <div className="border-2 border-[#e1dcd0] rounded-[10px] shrink-0 size-5" />
                </div>
              </div>
            </div>
            {/* Billing info card */}
            <div className="bg-white drop-shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-8 items-start p-8 rounded-3xl w-full">
              <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">
                DATOS DE FACTURACIÓN
              </p>
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-2 items-start w-full">
                  <p className="font-['Geist:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">Nombre completo</p>
                  <div className="border-[#e1dcd0] border-b flex items-start pb-2 w-full">
                    <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#0b120e] text-base">Juan Sebastián Mora</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <p className="font-['Geist:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">Correo electrónico</p>
                  <div className="border-[#e1dcd0] border-b flex items-start pb-2 w-full">
                    <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#0b120e] text-base">juan.mora@example.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start min-w-0">
                    <p className="font-['Geist:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">Documento de identidad</p>
                    <div className="border-[#e1dcd0] border-b flex items-start pb-2 w-full">
                      <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#0b120e] text-base">CC 10203040</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start min-w-0">
                    <p className="font-['Geist:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase whitespace-nowrap">Teléfono</p>
                    <div className="border-[#e1dcd0] border-b flex items-start pb-2 w-full">
                      <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#0b120e] text-base">+57 312 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center w-full">
                <div className="bg-[#dceb6b] border-2 border-[#13201a] flex items-center justify-center rounded shrink-0 size-5">
                  <div className="relative shrink-0 size-3">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                  </div>
                </div>
                <p className="flex-1 font-['Geist:Regular'] font-normal min-w-0 text-[#0b120e] text-[13px]">
                  <span className="leading-normal">Acepto los </span>
                  <a className="underline decoration-solid font-['Geist:SemiBold'] font-semibold leading-normal text-[#13201a] cursor-pointer" href="https://example.com/terms" target="_blank">Términos de Servicio</a>
                  <span className="leading-normal">, la </span>
                  <a className="underline decoration-solid font-['Geist:SemiBold'] font-semibold leading-normal text-[#13201a] cursor-pointer" href="https://example.com/privacy" target="_blank">Política de Privacidad</a>
                  <span className="leading-normal"> y la </span>
                  <a className="underline decoration-solid font-['Geist:SemiBold'] font-semibold leading-normal text-[#13201a] cursor-pointer" href="https://example.com/cancellation" target="_blank">Política de Cancelación</a>
                </p>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6 items-start lg:w-[480px] w-full shrink-0">
            <OrderSummaryCard tripImage={imgRectangle} />
            <div className="flex flex-col gap-4 items-start w-full">
              <button className="bg-[#dceb6b] flex items-center justify-center p-5 rounded-full w-full cursor-pointer">
                <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-base whitespace-nowrap">
                  PAGAR $382.500 COP ↗
                </p>
              </button>
              <div className="flex gap-2 items-center justify-center w-full">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
                </div>
                <p className="font-['Geist:Regular'] font-normal leading-normal text-[#4a524e] text-[12px] whitespace-nowrap">
                  Pago seguro encriptado de 256-bits procesado por PayU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── State 1b: Processing ── */}
      <div className="bg-[#13201a] flex items-center px-10 py-4 w-full">
        <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#dceb6b] text-lg uppercase whitespace-nowrap">
          Estado 1b: Procesando Pago (Pantalla de Espera)
        </p>
      </div>
      <Header />
      <div className="flex flex-col items-center pb-[120px] pt-20 px-10 lg:px-20 w-full">
        <div className="bg-white drop-shadow-[0px_20px_20px_rgba(19,32,26,0.1)] flex flex-col gap-8 items-center p-12 rounded-[32px] w-full max-w-[600px]">
          <div className="relative shrink-0 size-20">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpinnerBase} />
          </div>
          <div className="flex flex-col gap-3 items-center text-center w-full">
            <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-2xl w-full">
              Procesando tu pago...
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[1.5] text-[#4a524e] text-[15px] w-full">
              No cierres ni refresques esta ventana. Estamos verificando tu transacción de forma segura con la pasarela PayU. Esto puede tomar unos segundos.
            </p>
          </div>
          <div className="bg-[#f5f1e7] flex gap-[6px] items-center px-4 py-2 rounded-full">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldAlert} />
            </div>
            <p className="font-['Geist:SemiBold'] font-semibold leading-normal text-[#13201a] text-[12px] whitespace-nowrap">
              Conexión Encriptada SSL
            </p>
          </div>
        </div>
      </div>

      {/* ── State 2: Declined ── */}
      <div className="bg-[#13201a] flex items-center px-10 py-4 w-full">
        <p className="font-['Unbounded:Bold'] font-bold leading-normal text-[#dceb6b] text-lg uppercase whitespace-nowrap">
          Estado 2: Pago Rechazado — Reintento de Transacción
        </p>
      </div>
      <Header />
      <div className="flex flex-col gap-8 items-start pb-20 pt-10 px-10 lg:px-20 w-full">
        <Breadcrumbs />
        {/* Decline banner */}
        <div className="bg-[#fdf2f2] border border-[#9b1c1c] flex gap-4 items-center p-6 rounded-2xl w-full">
          <div className="bg-[#9b1c1c] flex items-center justify-center rounded-[20px] shrink-0 size-10">
            <div className="relative shrink-0 size-5">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlertCircle} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-start leading-normal min-w-0 text-[#9b1c1c]">
            <p className="font-['Unbounded:Black'] font-black text-base whitespace-nowrap">
              Pago rechazado por la entidad bancaria
            </p>
            <p className="font-['Geist:Regular'] font-normal text-sm">
              Motivo: Fondos insuficientes en la tarjeta seleccionada o rechazo de seguridad de tu banco.
            </p>
          </div>
        </div>
        {/* Countdown */}
        <div className="bg-[#fff7ed] flex gap-3 items-center px-6 py-3 rounded-lg w-full">
          <div className="relative shrink-0 size-[18px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
          </div>
          <p className="font-['Geist:SemiBold'] font-semibold leading-normal text-[#9a3412] text-sm whitespace-nowrap">
            Tu cupo expira en 08:15
          </p>
          <p className="flex-1 font-['Geist:Regular'] font-normal leading-normal min-w-0 text-[#9a3412] text-sm">
            — Completa tu reserva para asegurar las entradas y el transporte.
          </p>
        </div>
        {/* Two column */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          {/* Left column */}
          <div className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full">
            {/* Attempt warning */}
            <div className="bg-[#fff7ed] flex gap-3 items-center p-4 rounded-xl w-full">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlertTriangle} />
              </div>
              <p className="flex-1 font-['Geist:Bold'] font-bold leading-normal min-w-0 text-[#9a3412] text-[13px]">
                Tienes 1 intento restante. Si el pago falla nuevamente, tu cupo reservado para Chingaza será liberado automáticamente.
              </p>
            </div>
            {/* Payment gateway card */}
            <div className="bg-white drop-shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-6 items-start p-8 rounded-3xl w-full">
              <div className="flex flex-col gap-1 items-start w-full leading-normal">
                <p className="font-['Geist:Bold'] font-bold text-[#13201a] text-[12px] uppercase whitespace-nowrap">
                  INTENTAR CON OTRO MÉTODO
                </p>
                <p className="font-['Unbounded:Black'] font-black text-[#0b120e] text-2xl w-full">
                  Puedes usar una tarjeta diferente o PSE
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start w-full">
                {/* PayU selected */}
                <div className="bg-white border-2 border-[#13201a] flex gap-4 items-center p-5 rounded-xl w-full">
                  <div className="bg-[#f5f1e7] flex h-10 items-center justify-center rounded-[6px] shrink-0 w-16">
                    <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-sm whitespace-nowrap">PayU</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start leading-normal min-w-0">
                    <p className="font-['Geist:Bold'] font-bold text-[#0b120e] text-base whitespace-nowrap">PayU (Seleccionado)</p>
                    <p className="font-['Geist:Regular'] font-normal text-[#4a524e] text-[13px]">Tarjeta crédito/débito, PSE, efectivo (Efecty, Baloto)</p>
                  </div>
                  <div className="relative shrink-0 size-5">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                  </div>
                </div>
                {/* Wompi */}
                <div className="bg-white border border-[#e1dcd0] flex gap-4 items-center p-5 rounded-xl w-full">
                  <div className="bg-[#f5f1e7] flex h-10 items-center justify-center rounded-[6px] shrink-0 w-16">
                    <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-sm whitespace-nowrap">wompi</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start leading-normal min-w-0">
                    <p className="font-['Geist:Bold'] font-bold text-[#0b120e] text-base whitespace-nowrap">Cambiar a Wompi</p>
                    <p className="font-['Geist:Regular'] font-normal text-[#4a524e] text-[13px]">Usar Nequi o cuenta de ahorros Bancolombia</p>
                  </div>
                  <div className="border-2 border-[#e1dcd0] rounded-[10px] shrink-0 size-5" />
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6 items-start lg:w-[480px] w-full shrink-0">
            <OrderSummaryCard tripImage={imgRectangle1} />
            <div className="flex flex-col gap-4 items-start w-full">
              <button className="bg-[#dceb6b] flex items-center justify-center p-5 rounded-full w-full cursor-pointer">
                <p className="font-['Unbounded:Black'] font-black leading-normal text-[#13201a] text-base whitespace-nowrap">
                  REINTENTAR PAGO ↗
                </p>
              </button>
              <div className="flex flex-col font-['Geist:SemiBold'] font-semibold gap-3 items-center leading-normal text-sm w-full whitespace-nowrap">
                <p className="underline decoration-solid text-[#13201a] cursor-pointer">Cambiar método de pago alternativo</p>
                <p className="underline decoration-solid text-[#9b1c1c] cursor-pointer">Cancelar reserva y liberar cupo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
