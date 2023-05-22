import pluralize from 'pluralize'
type Props = {
  title: string;
  author: { name: string, link: string };
  date: string;
  image: string;
  category: string;
  link: string;
  topic: string
}
const Card = ({ title, author, date, image, category, topic, link }: Props) => {
  return (
    <div className='p-card border-red shadow'>
      <p className='p-card__header'>
        {topic ?? 'Article'}
      </p>
      <div className='p-card__content'>

        <img
          className='p-card__image'
          alt='image'
          height='185'
          width='330'
          src={image}
        />
        <h4>
          <a href={link}>
            <p className='u-truncate'>
              {title}
            </p>
          </a>
        </h4>

      </div>
      <p className='p-card__footer u-no-padding--bottom'>
        <p className='p-card__footer__author'>
          <em>
            By <a href={author.link}>{author.name}</a> on {new Date(date).toLocaleDateString('en-UK', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </em>
        </p>
        <p className='p-card__footer__category'>
          {pluralize.singular(category)}
        </p>
      </p>
    </div>
  )
}

export default Card