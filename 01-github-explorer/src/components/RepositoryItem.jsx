export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>Não contém descrição</p>
            <a href={props.repository.html_url}>
                Acessar Repositório
            </a>
        </li>
    )
}