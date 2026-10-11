import "./Form.css";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// O schema descreve os campos do formulário e as regras de validação de cada um.
// O Zod executa essas regras antes que os dados sejam enviados para o backend.
const registerUserFormSchema = z
	.object({
		email: z.email("Informe um e-mail válido"),
		password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
		confirmPassword: z.string().min(8, "A confirmação deve ter pelo menos 8 caracteres"),
        phone: z.string().min(10, "O telefone deve ter pelo menos 10 digitos").max(11,"O telefone deve ter no máx 11 digitos").regex(/^\d+$/,"O telefone deve conter apenas números")
	})
	// A confirmação precisa ser igual à senha. O erro será mostrado nesse campo.
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

// Cria automaticamente o tipo TypeScript a partir do schema do Zod.
// Assim, o formulário conhece os campos email, password e confirmPassword.
type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

// Esta função é chamada pelo handleSubmit somente quando os dados são válidos.
// O parâmetro data contém os valores preenchidos nos campos registrados.
const onSubmit: SubmitHandler<RegisterUserFormData> = async (data) => {
	console.log("Dados válidos:", data);

	// Envia os dados para a rota de cadastro do backend.
	await fetch("http://localhost:3333/users", {
		method: "POST",
		headers: {
			// Informa ao backend que o corpo da requisição está em formato JSON.
			"Content-Type": "application/json",
		},
		// Converte o objeto JavaScript para texto JSON antes de enviá-lo.
		body: JSON.stringify(data),
	});
};

export const Form = () => {
	// Inicializa o React Hook Form e conecta a validação do Zod ao formulário.
	const {
		// register conecta cada input ao React Hook Form.
		register,
		// handleSubmit valida os dados e chama onSubmit se tudo estiver correto.
		handleSubmit,
		// errors contém os erros de validação; isSubmitting indica envio em andamento.
		formState: { errors, isSubmitting },
	} = useForm<RegisterUserFormData>({
		// Valida o campo quando o usuário sai dele.
		mode: "onBlur",
		// Retorna todos os erros encontrados em um campo.
		criteriaMode: "all",
		// Usa o schema do Zod como fonte das regras de validação.
		resolver: zodResolver(registerUserFormSchema),
	});

	return (
		// handleSubmit impede o envio padrão e inicia o fluxo de validação.
		<form className="container" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="email">E-mail</label>
			<input
				type="email"
				id="email"
				placeholder="Informe o seu e-mail"
				// Registra o input com o nome "email", igual ao nome no schema.
				{...register("email")}
			/>
			{/* Renderização condicional: o parágrafo só aparece se houver erro. */}
			{errors?.email && <p>{errors.email.message}</p>}

			<label htmlFor="password">Senha</label>
			<input
				type="password"
				id="password"
				placeholder="Informe a sua senha"
				// Registra o valor da senha para captura e validação.
				{...register("password")}
			/>
			{errors?.password && <p>{errors.password.message}</p>}

			<label htmlFor="confirmPassword">Confirmar senha</label>
			<input
				type="password"
				id="confirmPassword"
				placeholder="Informe a sua senha novamente"
				// Registra a confirmação para que o refine compare as duas senhas.
				{...register("confirmPassword")}
			/>
			{errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}
			
            
            <label htmlFor="phone">Telefone</label>
			<input
				type="tel"
				id="phone"
				placeholder="Informe seu numero de telefone"
				// Registra o numero de telefone
				{...register("phone")}
			/>
			{errors?.phone && <p>{errors.phone.message}</p>}

			{/* Evita novos envios enquanto a requisição assíncrona está em andamento. */}
			<button type="submit" disabled={isSubmitting}>
				Cadastrar-se
			</button>
		</form>
	);
};
